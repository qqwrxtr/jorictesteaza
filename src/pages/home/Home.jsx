import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Cards from "./../../components/cards/Cards";

const Home = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4">Welcome to Teodor React!</h1>
      </div>
    </div>
    <div className="row mt-5">
      <Cards title={'Berserk'} under_title={'Nu am privit,si nu cred ca e berserk,insa arata frumos si bravo,nu am ce zice'} img={'https://cdn.pixabay.com/photo/2023/04/30/04/29/anime-7959691_960_720.jpg'}/>
      <Cards title={'BlueLock'} under_title={'Unul din singurele anime pe tema sportiva care chiar m-a uimit,foarte tare mi-a placut'} img={'https://www.journaldugeek.com/app/uploads/2022/11/copie-de-ajouter-un-titre-50.jpg'}/>
      <Cards title={'Your Name'} under_title={'Primul meu anime,datorita acestui fap ca istoria si animatia au fost la un nivel extraordinar m-am indragostit in anime'} img={'https://static.bangkokpost.com/media/content/20200710/c1_1949056_200710094854.jpg'}/>
    </div>
    <div className="row mt-5">
      <Cards title={'Berserk'} under_title={'Nu am privit,si nu cred ca e berserk,insa arata frumos si bravo,nu am ce zice'} img={'https://cdn.pixabay.com/photo/2023/04/30/04/29/anime-7959691_960_720.jpg'}/>
      <Cards title={'BlueLock'} under_title={'Unul din singurele anime pe tema sportiva care chiar m-a uimit,foarte tare mi-a placut'} img={'https://www.journaldugeek.com/app/uploads/2022/11/copie-de-ajouter-un-titre-50.jpg'}/>
      <Cards title={'Your Name'} under_title={'Primul meu anime,datorita acestui fap ca istoria si animatia au fost la un nivel extraordinar m-am indragostit in anime'} img={'https://static.bangkokpost.com/media/content/20200710/c1_1949056_200710094854.jpg'}/>
    </div>
  </div>
);

export default Home;