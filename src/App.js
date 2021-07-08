import styles from './app.module.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Contact from './components/pf_contents/contact/contact';
import Docu from './components/pf_contents/docu/docu';
import Edu from './components/pf_contents/edu/edu';
import Project from './components/pf_contents/projec/project';
import Stack from './components/pf_contents/stac/stack';
import Summary from './components/pf_contents/summary/summary';
import Sticky from 'react-sticky-el';


function App() {
  return (
    <div className={styles.app}>
      <div id="home" className={styles.header} ><Header /> </div>
      <Sticky stickyStyle={{zIndex:1}}>
      <div className={styles.nav}><Nav /></div>
      </Sticky>
      <div id="summary" className={styles.summary}><Summary /></div>
      <div id="project" className={styles.project}><Project /></div>
      <div id="stack" className={styles.stack}><Stack /></div>
      <div id="edu" className={styles.edu}><Edu /></div>
      <div id="docu" className={styles.docu}><Docu /></div>
      <div id="contact" className={styles.contact}><Contact /></div> 

    </div>
    
  );
}

export default App;
