import React, { Component } from "react";

export class Contact extends Component {
    render(){
        return(
            <div>
                <div class="border">
                    <h1 class="contact">Contact</h1>
                    <h3 className="text">Vous avez des questions, des problémes Contactez-nous!</h3>
                </div><br/>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput" className="label">Nom / Prénom</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" value="الإسم / النسب"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput" className="label">E-mail</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" value="البريد الإلكتروني"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput" className="label">Téléphone</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" value="الهاتف"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput" className="label">Sujet de votre message</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" value="موضوع الرسالة"/>
                    </div>
                    <div class="mb-3">
                        <label className="label">Message</label>
                        <textarea class="form-control"  value="الرسالة" required></textarea>  
                    </div>
                </form><br/>
                <a href="/ContactRep">
                    <button type="button" class="btn btn-secondary">Envoyer le message</button>
                </a>
                <br/><br/>
            </div>
        )
    }
}

