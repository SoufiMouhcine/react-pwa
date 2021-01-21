import React, { Component } from "react";
import img from "./slider2.jpg";
import axios from "axios"
export class Evenements extends Component {

    constructor(props) {
        super(props)
        this.state = {
            IDs: [],
            Titles: [],
            Dates: [],
            Corps: []
        }
    }

    componentDidMount() {
        axios.get("https://observatoire-aseds.herokuapp.com/evenement/")
            .then((res) => {
                console.log(res.data);
                const Evenements = res.data;
                const IDs_ = [];
                const Titles_ = [];
                const Dates_ = [];
                const Coprs_ = [];
                Evenements.forEach((element) => {
                    IDs_.push(element[0]);
                    Titles_.push(element[1]);
                    Dates_.push(element[2]);
                    Coprs_.push(element[3]);
                });
                const IDs = IDs_;
                const Titles = Titles_;
                const Dates = Dates_;
                const Corps = Coprs_;
                this.setState({ IDs });
                this.setState({ Titles });
                this.setState({ Dates });
                this.setState({ Corps })
                console.log(IDs)
            });
    }


    render() {
        const objet = {};
        const x = "";
        return (
            <div>
                <h1 className="act">Événements</h1><br /><br />
                <div class="row align-items-center justify-content-around">
                    {this.state.IDs.map((val) => {
                        return (
                            <div class="underline"><br/>
                                <div class="row">
                                    <div class="col-md-4">
                                        < img class="imgActualités" src={("https://observatoire-aseds.herokuapp.com/evenement/"+ this.state.IDs[val - 1]).image,{responseType:'blob'}} alt="actualité" />                            
                                    </div>
                                    <div class="col-md-8">
                                        <h4>{this.state.Titles[val - 1]}</h4>
                                        <p>
                                            <span class="filtrer">Date : </span><span class="date">{this.state.Dates[val - 1]}</span>
                                        </p>
                                        <p> {this.state.Corps[val - 1]}</p>
                                        <a class="lienActualités" href="#">Voir plus {'>'}</a><br /><br />
                                    </div>
                                </div>
                            </div>
                        );
                     })}
                </div>
            </div>
        );
    }
}