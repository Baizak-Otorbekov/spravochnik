import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; 
import HomePage from './HomePage';
import GuidePage from './GuidePage';
import SubordinatePage from './SubordinatePage';
import TerritorialPage from './TerritorialPage';
import  CentralOfficePage from './CentralOfficePage';
import  SearchPage from './SearchPage';
import  GssPage from './territory/GssPage';
import  GcpsPage from './territory/GcpsPage';
import  RosoPage from './territory/RosoPage';
import  UmchsBishkekPage from './territory/UmchsBishkekPage';
import  UmchsBatkenPage from './territory/UmchsBatkenPage';
import  UmchsChuiPage from './territory/UmchsChuiPage';
import  UmchsIssykKulPage from './territory/UmchsIssykKulPage';
import  UmchsJalalPage from './territory/UmchsJalalPage';
import  UmchsNarynPage from './territory/UmchsNarynPage';
import  UmchsOshPage from './territory/UmchsOshPage';
import  UmchsTalasPage from './territory/UmchsTalasPage';
import  UmchsOshOblPage from './territory/UmchsOshOblPage';
import CuksPage from './podved/CuksPage';
import DmpchsPage from './podved/DmpchsPage';
import VodolazPage from './podved/VodolazPage';
import SplpchsPage from './podved/SplpchsPage';
import SelvodPage from './podved/SelvodPage';
import DksPage from './podved/DksPage';
import SpnPage from './podved/SpnPage';
import DohPage from './podved/DohPage';
import GidrometPage from './podved/GidrometPage';
import ScrchsPage from './podved/ScrchsPage';
import TekstilPage from './podved/TekstilPage';
import AviaPage from './podved/AviaPage';
import AsearchPage from './podved/AsearchPage';
import MedPage from './podved/MedPage';
import UicPage from './podved/UicPage';
import BishPage from './podved/BishPage';
import KombPage from './podved/KombPage';
import OcrchsPage from './podved/OcrchsPage';
import MejPage from './podved/MejPage';
import JapmoPage from './podved/JapmoPage';
import BpmoPage from './podved/BpmoPage';
import TpmoPage from './podved/TpmoPage';
import LesPage from './podved/LesPage';
import NstrPage from './podved/NstrPage';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/guide" element={<GuidePage/>} />
        <Route path="/CentralOffice" element={<CentralOfficePage/>} />
        <Route path="/subordinate" element={<SubordinatePage />} />
        <Route path="/territorial" element={<TerritorialPage />} />
        <Route path="/territorial/gss" element={<GssPage />} />
        <Route path="/territorial/gcps" element={<GcpsPage />} />
        <Route path="/territorial/roso" element={<RosoPage />} />
        <Route path="/territorial/umchs-bishkek" element={<UmchsBishkekPage />} />
        <Route path="/territorial/umchs-batken" element={<UmchsBatkenPage />} />
        <Route path="/territorial/umchs-chui" element={<UmchsChuiPage />} />
        <Route path="/territorial/umchs-issyk-kul" element={<UmchsIssykKulPage />} />
        <Route path="/territorial/umchs-jalalabad" element={<UmchsJalalPage />} />
        <Route path="/territorial/umchs-naryn" element={<UmchsNarynPage />} />
        <Route path="/territorial/umchs-osh" element={<UmchsOshPage />} />
        <Route path="/territorial/umchs-talas" element={<UmchsTalasPage />} />
        <Route path="/territorial/umchs-osh-obl" element={<UmchsOshOblPage />} />
        <Route path="/subordinate/cuks" element={<CuksPage />} />
        <Route path="/subordinate/dmps" element={<DmpchsPage />} />
        <Route path="/subordinate/vodolaznaya-sluzhba" element={<VodolazPage />} />
        <Route path="/subordinate/sluzhba-plps" element={<SplpchsPage />} />
        <Route path="/subordinate/selvodzashchita" element={<SelvodPage />} />
        <Route path="/subordinate/dksplps" element={<DksPage />} />
        <Route path="/subordinate/spn" element={<SpnPage />} />
        <Route path="/subordinate/doh" element={<DohPage />} />
        <Route path="/subordinate/gidromed" element={<GidrometPage />} />
        <Route path="/subordinate/severnyj-centr" element={<ScrchsPage />} />
        <Route path="/subordinate/mes-tekstil" element={<TekstilPage />} />
        <Route path="/subordinate/aviacionnoe-predpriyatie" element={<AviaPage />} />
        <Route path="/subordinate/aviacionno-poiskovo-spasatelnaya-sluzhba" element={<AsearchPage />} />
        <Route path="/subordinate/medicinskaya-sluzhba" element={<MedPage />} />
        <Route path="/subordinate/uic" element={<UicPage />} />
        <Route path="/subordinate/bishkek-city" element={<BishPage />} />
        <Route path="/subordinate/respublikanskij-speckombinat" element={<KombPage />} />
        <Route path="/subordinate/oshskij-centr-po-reagirovaniyu-na-chs" element={<OcrchsPage />} />
        <Route path="/subordinate/mezhregionalnyj-centr" element={<MejPage />} />
        <Route path="/subordinate/zhalal-abad-pmo" element={<JapmoPage />} />
        <Route path="/subordinate/batken-pmo" element={<BpmoPage />} />
        <Route path="/subordinate/talas-pmo" element={<TpmoPage />} />
        <Route path="/subordinate/lesnaya-sluzhba" element={<LesPage />} />
        <Route path="/subordinate/naryn-stroj" element={<NstrPage />} />
        <Route path="/Search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;