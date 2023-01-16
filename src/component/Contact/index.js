import React from 'react';
import './contact.css';

const Signin =()=>{
    const email="";
    const password="";
return(
<div className="signin">





<form className="form-signin">
<label className="label-sigin">Nom</label>
<input  className="label-sigin" type="text"  placeholder=""  value={email} name="email"/>
<label className="label-sigin">Prénom</label>
<input  className="label-sigin" type="text"  placeholder=""  value={email} name="email"/>
<label className="label-sigin">Email</label>
<input  className="label-sigin" type="text"  placeholder="email@gmail.com"  value={email} name="email"/>
<label className="label-sigin">Mot de Passe</label>
<input className="label-sigin" type="password"  required placeholder="password"  value={password} name="password" />
<div className="btn-signin-wrapper">
 
<button className='btn-connexion'>Connexion</button>

</div>
</form>


<div className="header-sign">
<h4>Vous n'avez pas un compte?</h4>

<h3 >S'inscrire</h3>

</div>

</div>)

}
export default Signin;



