import React, { Component } from "react";
import axios from "axios"
import { FormControl } from "react-bootstrap";
import { Row, Form, Col, Button } from "react-bootstrap";


export class InformationDuCompte extends Component {
    constructor(props) {
        super(props)
        this.state = {
            compte: [],
            cooperative: []
        }
    }

    componentDidMount() {
        let tokene = `Bearer ` + (JSON.parse(localStorage.getItem('tokens')).token)
        axios.get("https://observatoire-aseds.herokuapp.com/compte/", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': tokene
            }
        })
            .then(response => {
                this.setState({ compte: response.data })
                console.log(this.state.compte)
            })
            .catch((e) => {
                console.log(e);
            });

        axios.get("https://observatoire-aseds.herokuapp.com/Cooperatives/afficher", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': tokene
            }
        })
            .then(res => {
                this.setState({ cooperative: res.data })
                console.log(this.state.cooperative)
            })
            .catch((e) => {
                console.log(e);
            });

    }








    render() {
        var a = 3;
        var b = 9;
        const { values, inputChange } = this.props;
        return (
            <div>
                <div class="border">
                    <h1 class="contact">INFORMATION DU COMPTE</h1>
                </div><br /><br />
                <form>
                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Nom du president</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                name={this.state.compte.nomPresident}
                                value={this.state.compte.nomPresident}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">username</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                name={this.state.compte.userName}
                                value={this.state.compte.userName}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Téléphone</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                name={this.state.compte.telephonePresident}
                                value={this.state.compte.telephonePresident}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Nom Coopérative</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                name={this.state.cooperative.nom}
                                value={this.state.cooperative.nom}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Numéro TPI</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.numerotpi} name={this.state.cooperative.numerotpi}  onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Nombre d'adhérent</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.nombreAdherents} name={this.state.cooperative.nombreAdherents}  onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Branche</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.branche} name={this.state.cooperative.branche} onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Province</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.province} name={this.state.cooperative.province} onChange={this.changeHandler}                               
                                 required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Région</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.region} name={this.state.cooperative.region} onChange={this.changeHandler}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Secteur d'Activité</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.secteur} name={this.state.cooperative.secteur} onChange={this.changeHandler}
                                                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Telephone</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.telephone} name={this.state.cooperative.telephone} onChange={this.changeHandler}
                                                                required />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Fax</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.fax} name={this.state.cooperative.fax} onChange={this.changeHandler}                         
                                                                       required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Adresse actuelle</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.adresseActuelle} name={this.state.cooperative.adresseActuelle} onChange={this.changeHandler}                         
                                                                       required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Date de Création</label>
                        <div class="col-sm-10">
                            <input type="text"
                                className="form-control"
                                value={this.state.cooperative.dateCreation} type="date" name={this.state.cooperative.dateCreation} onChange={this.changeHandler}
                                                                                                       required />
                        </div>
                    </div><br/>


            </form>
                        </div >
        )
    }
}
