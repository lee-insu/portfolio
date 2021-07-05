import styles from './app.module.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Contact from './components/pf_contents/contact/contact';
import Docu from './components/pf_contents/docu/docu';
import Edu from './components/pf_contents/edu/edu';
import Project from './components/pf_contents/projec/project';
import Stack from './components/pf_contents/stac/stack';
import Summary from './components/pf_contents/summary/summary';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header} ><Header /> </div>
      <div className={styles.nav}><Nav /></div>
      <div className={styles.summary}><Summary /></div>
      <div className={styles.project}><Project /></div>
      <div className={styles.stack}><Stack /></div>
      <div className={styles.edu}><Edu /></div>
      <div className={styles.docu}><Docu /></div>
      <div className={styles.contact}><Contact /></div> 
    </div>
    
  );
}

export default App;
