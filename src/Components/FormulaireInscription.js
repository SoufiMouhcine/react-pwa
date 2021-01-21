import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import Axios from "axios"

export class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "nom": "fakihamos",
      "nombreAdherents": 65656,
      "numerotpi": 65999999,
      "telephone": 466545221,
      "branche": "ELEVAGE",
      "secteur": "Agriculture",
      "province": "Province d'Al Hoceïma",
      "region": "Tanger-Tétouan-Al Hoceïma",
      "fax": 46456464,
      "adresseActuelle": "gjhghjg",
      "dateCreation": "2017-12-27"




    }
  }

  suivant = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    let tokene = `Bearer ` + (JSON.parse(localStorage.getItem('tokens')).token)
    console.log(tokene)

    Axios.post("https://observatoire-aseds.herokuapp.com/Cooperatives/", this.state, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': tokene
        //"Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        if (response.status === 200)
          alert("Coopérative bien inscrit sur notre site")
      })
      .catch(error => {
        console.log(error)

      });

  }


  render() {
    var a = 3;
    var b = 9;
    const { values, inputChange } = this.props;

    return (
      <div>
        <h1 >Incription</h1>
        <br />
        <Form>
          <Form.Group as={Row} controlId="nom">
            <Form.Label column sm={a}>
              Nom Coopérative ou Union
            </Form.Label>
            <Col sm={b}>
              <Form.Control
                name="nom"
                onChange={this.changeHandler}
                value="Nom coopérative"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="numeroTPI">
            <Form.Label column sm={a}>
              Numéro TPI
            </Form.Label>
            <Col sm={b}>
              <Form.Control value="numéro TPI" name="numerotpi" type="number" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Nombre d'adhérent">
            <Form.Label column sm={a}>
              Nombre d'adhérent
            </Form.Label>
            <Col sm={b}>
              <Form.Control value="Nombre d'adhérent" name="nombreAdherents" type="number" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Branche">
            <Form.Label column sm={a}>
              Branche
            </Form.Label>
            <Col sm={b}>
              <select class="custom-select" value="Branche" name="branche" onChange={this.changeHandler}>
                <option selected>Sélectionner une branche</option>
                <option value="ELEVAGE">ELEVAGE</option>
                <option value="COLLECTE & COMMERCIALISATION D">COLLECTE et COMMERCIALISATION</option>
                <option value="argan">argan</option>
                <option value="TAILLEURS">TAILLEURS</option>
                <option value="TEXTILES">TEXTILES </option>
                <option value="BOIS-MENUISERI">BOIS-MENUISERIE </option>
                <option value="MADRIEURS">MADRIEURS</option>
                <option value="BUCHERONS CHARBONNIERS">BUCHERONS CHARBONNIERS </option>
                <option value="PICICULTURE">PICICULTURE</option>
                <option value="PLANTES MEDICINALES ET AROMATI">PLANTES MEDICINALES ET AROMATI</option>
                <option value="ALGUES">ALGUES</option>
                <option value="PECHE ARTISANALE">PECHE ARTISANALE</option>
                <option value="COQUILLAGE">COQUILLAGE</option>
                <option value="APICOLE">APICOLE</option>
              </select>            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Province">
            <Form.Label column sm={a}>
              Province
            </Form.Label>
            <Col sm={b}>
              <select class="custom-select" value="Province" name="province" onChange={this.changeHandler}>
                <option selected>Sélectionner Province</option>
                <option value="Province d'Al Hoceïma">Province d'Al Hoceïma</option>
                <option value="Préfecture de Tanger-Assilah">Préfecture de Tanger-Assilah</option>
                <option value="Préfecture d'Oujda-Angad">Préfecture d'Oujda-Angad</option>
                <option value="Province de Nador">Province de Nador</option>
                <option value="Préfecture de Fès">Préfecture de Fès </option>
                <option value="Préfecture de Meknès">Préfecture de Meknès </option>
                <option value="Province d'Errachidia">Province d'Errachidia</option>
                <option value="Province de Ouarzazate">Province de Ouarzazate</option>
                <option value="Préfecture de Rabat">Préfecture de Rabat</option>
                <option value="Préfecture de Salé">Préfecture de Salé</option>
                <option value="Province de Béni-Mellal">Province de Béni-Mellal</option>
                <option value="Province de Khouribga">Province de Khouribga</option>
              </select>            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Région">
            <Form.Label column sm={a}>
            Région
            </Form.Label>
            <Col sm={b}>
              <select class="custom-select" value="Région" name="region" onChange={this.changeHandler}>
                <option selected>Sélectionner Région</option>
                <option value="Tanger-Tétouan-Al Hoceïma">Tanger-Tétouan-Al Hoceïma</option>
                <option value=" l'Oriental"> l'Oriental</option>
                <option value=" Fès-Meknès"> Fès-Meknès</option>
                <option value="Rabat-Salé-Kénitra">Rabat-Salé-Kénitra</option>
                <option value="Béni Mellal-Khénifra">Béni Mellal-Khénifra </option>
                <option value="Casablanca-Settat">Casablanca-Settat</option>
                <option value="Marrakech-Safi">Marrakech-Safi</option>
                <option value="Drâa-Tafilalet">Drâa-Tafilalet</option>
                <option value="Souss-Massa">Souss-Massa</option>
                <option value="Guelmim-Oued Noun">Guelmim-Oued Noun</option>
                <option value="Laâyoune-Sakia El Hamra">Laâyoune-Sakia El Hamra</option>
                <option value="Dakhla-Oued Ed Dahab">Dakhla-Oued Ed Dahab</option>
              </select>            </Col>
          </Form.Group>


          <Form.Group as={Row} controlId="secteurActivite">
            <Form.Label column sm={a}>
              Secteur d'Activité
            </Form.Label>
            <Col sm={b}>
              <select class="custom-select" value="Secteur d'Activité" name="secteur" onChange={this.changeHandler}>
                <option selected>Sélectionner une branche</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Artisanat">Artisanat</option>
                <option value="Tourisme">Tourisme</option>
                <option value="Transport">Transport</option>
                <option value="Consommation">Consommation </option>
                <option value="Pêche">Pêche</option>
                <option value="Commerce de détail">Commerce de détail</option>
                <option value="Forêts">Forêts</option>
                <option value="Argan">Argan</option>
                <option value="plantes aromatiques et medicin">plantes aromatiques et medicin</option>
                <option value="Mines">Mines</option>
                <option value="Alphabétisation">Alphabétisation</option>
                <option value="Commerce électronique">Commerce électronique</option>
                <option value="Denrées alimentaires">Denrées alimentaires</option>
              </select>            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="telephone">
            <Form.Label column sm={a}>
              Telephone
            </Form.Label>
            <Col sm={b}>
              <Form.Control value="Telephone" name="telephone" type="number" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="fax">
            <Form.Label column sm={a}>
              Fax
            </Form.Label>
            <Col sm={b}>
              <Form.Control value="Fax" name="fax" type="number" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Adresse actuelle">
            <Form.Label column sm={a}>
              Adresse actuelle
            </Form.Label>
            <Col sm={b}>
              <Form.Control value="Adresse actuelle" name="adresseActuelle" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Date de Création">
            <Form.Label column sm={a}>
              Date de Création
            </Form.Label>
            <Col sm={b}>
              <Form.Control value="2017-12-27" type="date" name="dateCreation" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Button variant="primary" onClick={this.submitHandler} type="submit">
            Incription
          </Button>
        </Form>
      </div>


    );
  }
}
