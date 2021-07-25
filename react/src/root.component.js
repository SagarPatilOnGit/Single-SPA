import './root.css';
export default function Root(props) {
  const onInputClick = (e)=>{
    console.log(e.target.value);
    const evt = new CustomEvent('test', {detail: e.target.value});
    window.dispatchEvent(evt);
  }

  return <section>
     <h1>
    React app goes here
  </h1>
    {props.name} is mounted!  
    <div>

    <input type="text" onKeyUp={(e)=>{onInputClick(e)}}></input>
    </div>
  </section>;
}
