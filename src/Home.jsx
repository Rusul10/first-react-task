import img from "./React-logo.png";
export default function Home() {
  console.log("hello from component, I'm the child of this page");

  return (
    <div className="home">
      <h1>This is Rusul tag from component calling</h1>
      <img src={img} className="imglogo" alt="img"></img>
    </div>
  );
}
