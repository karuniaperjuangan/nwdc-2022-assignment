import logo from '../logo.svg';


export default function Daftar(){
    return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p className=' text-white'>
      Tech stacknya ya React lah...
    </p>

    <p className=' text-white my-12'>
      Tapi juga belajar (termasuk di luar webdev) ...
    </p>

    <div className=' h-8'></div>
    <div className=' px-16 flex flex-wrap mx-auto'>
    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'} className=" p-6 h-24" alt="logo" />
    <img src={'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png'} className=" p-6 h-24" alt="logo" />
    <img src={'https://iconape.com/wp-content/png_logo_vector/flutter.png'} className=" p-6 h-24" alt="logo" />
    <img src={'https://pytorch.org/assets/images/pytorch-logo.png'} className=" p-6 h-24" alt="logo" />
    <img src={'https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'} className=" p-6 h-24" alt="logo" />
    </div>

  </header>
}