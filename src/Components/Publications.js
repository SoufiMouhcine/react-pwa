import React, { Component } from "react";
import img2 from "./slider2.jpg";
import axios from "axios";
export class Publications extends Component {

  constructor(props) {
    super(props)
    this.state = {
      IDs: [],
      Titles: [],
      Dates: []
    }
  }

  componentDidMount() {
    axios.get("https://observatoire-aseds.herokuapp.com/publications/")
      .then((res) => {
        console.log(res.data);
        const Publications = res.data;
        const IDs_ = [];
        const Titles_ = [];
        const Dates_ = [];
        Publications.forEach((element) => {
          IDs_.push(element[0]);
          Titles_.push(element[1]);
          Dates_.push(element[2]);
        });
        const IDs = IDs_;
        const Titles = Titles_;
        const Dates = Dates_;
        this.setState({ IDs });
        this.setState({ Titles });
        this.setState({ Dates });
        console.log(IDs)
      });


    //Titre pub 1


  }
  /*componentDidMount(){
    fetch('https...')
    .then((response) => {
      return response.json()
    })
    .then((result)=>{
      this.setState({pub: result})
      console.log(result)
    })
  }*/



  render() {
    return (

      <div className="container">
        <div class="container">
          <h1>Publications et Rapports</h1>
          <br />
          <div class="row align-items-center justify-content-around">
            <div class="col-md-2.5">
              <span class="filtrer">Filtrez par :</span>
            </div>
            <div class="col-md-3">
              <select class="custom-select">
                <option selected>Date de publication</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="custom-select">
                <option selected>Région</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="custom-select">
                <option selected>Catégorie</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-success">Valider</button>
            </div>
          </div>
          <br /><br />

          <div class="row">
            {this.state.IDs.map((val) => {
              return (
                <div class="col-md-3">
                  <div class="row">
                    <div class="col-md-8">
                      <a href="#">
                        <img class="img" src={img2} title="voir l'article" alt="article" />
                        <p class="txt">
                          {this.state.Titles[val - 1]}<br />
                          <span class="date">Date:{this.state.Dates[val - 1]}</span>
                        </p>
                      </a>
                    </div>
                    <div class="row align-items-end">
                      <div class="col-lg">
                        <a href={"https://observatoire-aseds.herokuapp.com/publications/" + this.state.IDs[val - 1
                        ]}>
                          <p class="lien">télecharger</p>
                          <br /><br />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}









          </div>
        </div>
      </div>
    );
  }
}


