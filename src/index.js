import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
function App(){
  <>
   <dic className='card'>
    <Avatar />
     <div className='data'>
      <Intro />
     </div>
   </dic>
  </>
}
function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='Sleep' emoji='🦾' color='red' />
      <Skill skill='MonkyBrain' emoji='🧠' color='blue' />
      <Skill skill='Relax' emoji='👌' color='green' />
      <Skill skill='Rock' emoji=' 🤘' color='cyan' />
    </div>
  );
}
function Skill(prop){
  return(
    <div className='skill'> style={{ backgroundColor: prop.color }}
      <span>(prop.skill)</span>
      <span>(prop.emoji)</span>
    </div>
  );
}
function Intro() {
  return(
    <div>
      <h1>นายรัฐกานต์ มังกิจ</h1>
      <p>
        นักศึกษาสาขาเทโนโลยีสารสนเทสและการสื่อสาร คณะวิทยาศาสตร์
      </p>
    </div>
  )
}
function Avatar(){
  return<img className='avatar' src='ดาวน์โหลด.jpg' alt='MyAvatar' />;


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
