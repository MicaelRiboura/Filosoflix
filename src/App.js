import React from 'react'
import Header from './components/Header'
import Home from  './components/pages/Home'
import Section from './components/pages/Section'
function App() {
  return (
    <div >
     <Header />
     <Home/>
     <Section title="Michel Foucault" maxResults="10"/>
     <Section title="Baruch Espinosa" maxResults="10"/>
     <Section title="Platão" maxResults="10"/>
     <Section title="Schopenhauer" maxResults="10"/>
     <Section title="Clóvis de Barros" maxResults="10"/>
     <Section title="Mário Sérgio Cortella" maxResults="10"/>
     <Section title="Leandro Karnal" maxResults="10"/>
    </div>
  );
}

export default App;
