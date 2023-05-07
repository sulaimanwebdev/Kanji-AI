import {useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    const [mainScreen, setmainScreen] = useState("home");
    const [screen, setscreen] = useState(1);
    const [password, setpassword] = useState(false);
    const [confirmPassword, setconfirmPassword] = useState(false);

    // ------ Create Account
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const [inputPassword, setinputPassword] = useState("");
    const [inputConfirmPassword, setinputConfirmPassword] = useState("");

     // ------ Add Brand
     const [brandName, setbrandName] = useState("");
     const [brandDescription, setbrandDescription] = useState("");


    // -------
    let progressBack = () =>{
      if(screen === 1){
        setmainScreen("home");
      }

      if(screen === 2){
        setscreen(1);
      }

      if(screen === 3){
        setscreen(2);
      }

      if(screen === 4){
        setscreen(3);
      }
    }


    let progress = () => {
      if(screen === 1){
        if (fullName === "" || email === "" || inputPassword === "" || inputConfirmPassword === "") {
            alert("Please fill out all fields.")
            return;
        }
          setscreen(2);
        }

        if(screen === 2){
         if (brandName === "" || brandDescription === "") {
             alert("Please fill out all fields.")
             return;
         }
           setscreen(3);
         }

         if(screen === 3){
            setscreen(4);
         }

         if(screen === 4){
            setscreen(5);
         }
        }


  return (
    <>
    <div className="min-h-screen bg-main px-5 py-10 flex items-center justify-center">

     <div className={`text-center text-white w-full ${mainScreen === "home" ? "block" : "hidden"}`}>
      <img src="/images/main.svg" alt="main" className='w-[400px] lg:w-[500px] mx-auto' />
      <div className='max-w-[600px] mx-auto relative'>
        <div className='font-bold text-[30px] sm:text-[35px] mt-3'>Welcome to Kanji</div>
        <div className='font-light mt-2'>We're happy to help you manage and measure your brand perception using our AI video analysis tool</div>
        <button onClick={()=> {setmainScreen("login")}} className='buttonShadow w-full flex items-center justify-center py-3 bg-[#0B6DEB] rounded-full mt-10'>Get Started</button>
        <img src="/images/commas.svg" alt="commas" className='absolute -top-5 left-0 w-[80px]' />
      </div>
     </div>



        <div className={`bg-white w-full max-w-[600px] mx-auto rounded-md p-7 ${mainScreen === "login" ? "block" : "hidden"}`}>
          {
            screen === 5 ?
            null
            :
            <div className="flex items-center justify-between gap-3 mb-10">
                <button onClick={progressBack}><svg width="35" height="19" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM40 10.5L2 10.5V13.5L40 13.5V10.5Z" fill="#909090"/></svg></button>
                <div className='flex items-center gap-2 w-full sm:w-auto'>
                    <div className="w-full sm:w-24 h-[6px] bg-main rounded-full"></div>
                    <div className={`w-full sm:w-24 h-[6px] rounded-full ${screen > 1 ? "bg-main" : "bg-[#E2EFFF]"}`}></div>
                    <div className={`w-full sm:w-24 h-[6px] rounded-full ${screen > 2 ? "bg-main" : "bg-[#E2EFFF]"}`}></div>
                    <div className={`w-full sm:w-24 h-[6px] rounded-full ${screen > 3 ? "bg-main" : "bg-[#E2EFFF]"}`}></div>
                </div>
                <div className="invisible opacity-0 hidden sm:flex">.</div>
            </div>
          }

            {/* Create Account */}
           <div className={`w-full ${screen === 1 ? "" : "hidden"}`}>
              <div className='text-center mb-10'>
                 <div className='font-[800] text-[25px] sm:text-[30px] mb-2.5'>Create your account</div>
                 <div className='text-not-gray'>Fill up the form and register your details to create a new account</div>
              </div>

              <div>
                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main h-[60px]">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Full Name</div>
                    <input type="text" placeholder='John Carter' className='w-full border-none outline-none h-full text-[15px]' value={fullName} onChange={(e)=> {setfullName(e.target.value)}} />
                </div>

                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Email</div>
                    <input type="email" placeholder='JohnCarter@email.com' className='w-full border-none outline-none h-full text-[15px]' value={email} onChange={(e)=> {setemail(e.target.value)}} />
                </div>

                <div className="relative w-full flex items-center gap-2 rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Password</div>
                    <input type={password === false ? "password" : "text"} placeholder='Enter your Password' className='w-full border-none outline-none h-full text-[15px]' value={inputPassword} onChange={(e)=> {setinputPassword(e.target.value)}} />
                    <button onClick={()=> {setpassword(!password)}} className='h-full'><svg width="23" height="18" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2493 8.59599C24.5043 5.75299 20.5343 0.984985 13.5653 0.984985C6.59631 0.984985 2.63131 5.75299 0.886306 8.59599C0.346806 9.46853 0.0610352 10.4741 0.0610352 11.5C0.0610352 12.5259 0.346806 13.5314 0.886306 14.404C2.63131 17.246 6.60131 22.015 13.5683 22.015C20.5353 22.015 24.5053 17.247 26.2503 14.404C26.7897 13.5313 27.0753 12.5257 27.0751 11.4998C27.0749 10.474 26.789 9.46844 26.2493 8.59599ZM24.3313 13.23C22.8313 15.667 19.4403 19.768 13.5683 19.768C7.69631 19.768 4.30331 15.663 2.80431 13.23C2.48376 12.7113 2.31398 12.1137 2.31398 11.504C2.31398 10.8943 2.48376 10.2966 2.80431 9.77799C4.30331 7.33699 7.69531 3.23499 13.5653 3.23499C19.4353 3.23499 22.8323 7.32999 24.3313 9.77399C24.6526 10.2931 24.8229 10.8915 24.8229 11.502C24.8229 12.1125 24.6526 12.7109 24.3313 13.23Z" fill={password === false ? "black" : "#0C77FF"}/><path d="M13.5684 5.87399C12.4557 5.87399 11.3679 6.20395 10.4427 6.82214C9.51756 7.44034 8.79646 8.319 8.37064 9.34702C7.94482 10.375 7.83341 11.5062 8.05049 12.5976C8.26757 13.6889 8.80339 14.6914 9.5902 15.4782C10.377 16.265 11.3795 16.8008 12.4708 17.0179C13.5621 17.235 14.6933 17.1236 15.7214 16.6977C16.7494 16.2719 17.628 15.5508 18.2462 14.6256C18.8644 13.7004 19.1944 12.6127 19.1944 11.5C19.1944 10.7612 19.0489 10.0296 18.7661 9.34702C18.4834 8.66444 18.069 8.04423 17.5466 7.52181C17.0241 6.99939 16.4039 6.58498 15.7214 6.30225C15.0388 6.01951 14.3072 5.87399 13.5684 5.87399ZM13.5684 14.874C12.9008 14.8742 12.2481 14.6764 11.693 14.3056C11.1378 13.9348 10.7051 13.4078 10.4495 12.791C10.1939 12.1743 10.127 11.4956 10.2572 10.8408C10.3874 10.186 10.7088 9.58457 11.1809 9.11251C11.653 8.64045 12.2544 8.31899 12.9092 8.18879C13.564 8.0586 14.2427 8.12552 14.8594 8.38109C15.4761 8.63666 16.0032 9.0694 16.374 9.62457C16.7448 10.1797 16.9426 10.8324 16.9424 11.5C16.9421 12.3948 16.5866 13.2528 15.9539 13.8855C15.3212 14.5182 14.4631 14.8737 13.5684 14.874Z" fill={password === false ? "black" : "#0C77FF"}/></svg></button>
                </div>

                <div className="relative w-full flex items-center gap-2 rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Confirm Password</div>
                    <input type={confirmPassword === false ? "password" : "text"} placeholder='Confirm your Password' className='w-full border-none outline-none h-full text-[15px]' value={inputConfirmPassword} onChange={(e)=> {setinputConfirmPassword(e.target.value)}} />
                    <button onClick={()=> {setconfirmPassword(!confirmPassword)}} className='h-full'><svg width="23" height="18" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2493 8.59599C24.5043 5.75299 20.5343 0.984985 13.5653 0.984985C6.59631 0.984985 2.63131 5.75299 0.886306 8.59599C0.346806 9.46853 0.0610352 10.4741 0.0610352 11.5C0.0610352 12.5259 0.346806 13.5314 0.886306 14.404C2.63131 17.246 6.60131 22.015 13.5683 22.015C20.5353 22.015 24.5053 17.247 26.2503 14.404C26.7897 13.5313 27.0753 12.5257 27.0751 11.4998C27.0749 10.474 26.789 9.46844 26.2493 8.59599ZM24.3313 13.23C22.8313 15.667 19.4403 19.768 13.5683 19.768C7.69631 19.768 4.30331 15.663 2.80431 13.23C2.48376 12.7113 2.31398 12.1137 2.31398 11.504C2.31398 10.8943 2.48376 10.2966 2.80431 9.77799C4.30331 7.33699 7.69531 3.23499 13.5653 3.23499C19.4353 3.23499 22.8323 7.32999 24.3313 9.77399C24.6526 10.2931 24.8229 10.8915 24.8229 11.502C24.8229 12.1125 24.6526 12.7109 24.3313 13.23Z" fill={confirmPassword === false ? "black" : "#0C77FF"}/><path d="M13.5684 5.87399C12.4557 5.87399 11.3679 6.20395 10.4427 6.82214C9.51756 7.44034 8.79646 8.319 8.37064 9.34702C7.94482 10.375 7.83341 11.5062 8.05049 12.5976C8.26757 13.6889 8.80339 14.6914 9.5902 15.4782C10.377 16.265 11.3795 16.8008 12.4708 17.0179C13.5621 17.235 14.6933 17.1236 15.7214 16.6977C16.7494 16.2719 17.628 15.5508 18.2462 14.6256C18.8644 13.7004 19.1944 12.6127 19.1944 11.5C19.1944 10.7612 19.0489 10.0296 18.7661 9.34702C18.4834 8.66444 18.069 8.04423 17.5466 7.52181C17.0241 6.99939 16.4039 6.58498 15.7214 6.30225C15.0388 6.01951 14.3072 5.87399 13.5684 5.87399ZM13.5684 14.874C12.9008 14.8742 12.2481 14.6764 11.693 14.3056C11.1378 13.9348 10.7051 13.4078 10.4495 12.791C10.1939 12.1743 10.127 11.4956 10.2572 10.8408C10.3874 10.186 10.7088 9.58457 11.1809 9.11251C11.653 8.64045 12.2544 8.31899 12.9092 8.18879C13.564 8.0586 14.2427 8.12552 14.8594 8.38109C15.4761 8.63666 16.0032 9.0694 16.374 9.62457C16.7448 10.1797 16.9426 10.8324 16.9424 11.5C16.9421 12.3948 16.5866 13.2528 15.9539 13.8855C15.3212 14.5182 14.4631 14.8737 13.5684 14.874Z" fill={confirmPassword === false ? "black" : "#0C77FF"}/></svg></button>
                </div>

                <button onClick={progress} className='buttonShadow w-full flex items-center justify-center py-3 transition bg-main hover:bg-main-hover text-white rounded-full mt-10'>Create Account</button>

              </div>
           </div>



           {/* Add Brand */}
           <div className={`w-full ${screen === 2 ? "" : "hidden"}`}>
              <div className='text-center mb-10'>
                 <div className='font-[800] text-[25px] sm:text-[30px] mb-2.5'>Add your Brand</div>
                 <div className='text-not-gray'>Allow the AI algorithm to become acquainted with your<br/> brand for a more sophisticated analysis.</div>
              </div>

              <div>
                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main h-[60px]">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Brand name</div>
                    <input type="text" placeholder='Enter your Brand name' className='w-full border-none outline-none h-full text-[15px]' value={brandName} onChange={(e)=> {setbrandName(e.target.value)}} />
                </div>

                <div className="relative w-full flex items-start rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main min-h-[150px] pb-2 mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Brand Description</div>
                    <textarea placeholder='Include information about what the brand does, what its values are, or any other relevant details.' className='w-full resize-none border-none outline-none min-h-[150px] text-[15px] mt-4' value={brandDescription} onChange={(e)=> {setbrandDescription(e.target.value)}}></textarea>
                </div>

               
                <button onClick={progress} className='buttonShadow w-full flex items-center justify-center py-3 transition bg-main hover:bg-main-hover text-white rounded-full mt-10'>Add Brand</button>

              </div>
           </div>


           {/* Add Product */}
           <div className={`w-full ${screen === 3 ? "" : "hidden"}`}>
              <div className='text-center mb-10'>
                 <div className='font-[800] text-[25px] sm:text-[30px] mb-2.5'>Add your Product</div>
                 <div className='text-not-gray'>Allow the AI algorithm to become acquainted with your<br/> brand for a more sophisticated analysis.</div>
              </div>

              <div>
                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main h-[60px]">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Product name</div>
                    <input type="text" placeholder='Enter your Product name' className='w-full border-none outline-none h-full text-[15px]' />
                </div>

                <div className="relative w-full flex items-start rounded-md border-solid border border-[#AAAAAA] px-5 focus-within:border-main min-h-[150px] pb-2 mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Product Description</div>
                    <textarea placeholder='Include information about what the product does, or any other relevant details.' className='w-full resize-none border-none outline-none min-h-[150px] text-[15px] mt-4' ></textarea>
                </div>

                <button onClick={progress} className='buttonShadow w-full flex items-center justify-center py-3 transition bg-main hover:bg-main-hover text-white rounded-full mt-10'>Add Product</button>
                 <button onClick={progress} className='flex items-center justify-center w-fit text-[#A8A8A8] border-solid border-b border-[#A8A8A8] mx-auto text-center mt-5'>Skip</button>
              </div>
           </div>



           {/* First Report */}
           <div className={`w-full ${screen === 4 ? "" : "hidden"}`}>
              <div className='text-center mb-10'>
                 <div className='font-[800] text-[25px] sm:text-[30px] mb-2.5'>Create your first report</div>
                 <div className='text-not-gray'>Customize your analysis report by selecting your preferred  topic, duration, and report frequency.</div>
              </div>

              <div>
                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px]">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Analysis Topic</div>
                    <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer bg-white text-[#9CA3AF] w-full px-5 rounded-md h-full outline-none">
                     <option>What would you like to analyze?</option>
                     {brandName === "" ? null : <option>{brandName}</option>}
                    </select>
                </div>

                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Duration</div>
                    <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer bg-white text-[#9CA3AF] w-full px-5 rounded-md h-full outline-none">
                     <option>How long would you like the analysis to run?</option>
                     <option>One Day</option>
                     <option>One Week</option>
                     <option>One Month</option>
                    </select>
                </div>

                <div className="relative w-full flex items-center rounded-md border-solid border border-[#AAAAAA] focus-within:border-main h-[60px] mt-8">
                    <div className="text-[#6E6E6E] text-[15px] font-[500] absolute -top-[10px] left-3 bg-white px-2">Frequency</div>
                    <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer bg-white text-[#9CA3AF] w-full px-5 rounded-md h-full outline-none">
                     <option>How many times should we repeat the analysis?</option>
                     <option>Doesn’t repeat</option>
                     <option>Repeats twice</option>
                     <option>Repeats forever</option>
                    </select>
                </div>

                <button onClick={progress} className='buttonShadow w-full flex items-center justify-center py-3 transition bg-main hover:bg-main-hover text-white rounded-full mt-10'>Create Report</button>
              </div>
           </div>


           {/* Horray */}
           <div className={`w-full ${screen === 5 ? "" : "hidden"}`}>
              
              <div className='text-center'>
               <img src="/images/rocket.svg" alt="rocket" className='w-[250px] mx-auto' />
               <div className='font-[800] text-[25px] sm:text-[30px] mb-2.5 mt-6'>Hooray!</div>
               <div className='text-not-gray'>You're all set to start measuring your brand perception with Kanji! Your report is on its way, and we can't wait to see the results!</div>

                <Link to="/dashboard/key-takeaways" onClick={progress} className='buttonShadow w-full flex items-center justify-center py-3 transition bg-main hover:bg-main-hover text-white rounded-full mt-10'>Get Started</Link>
              </div>
           </div>


        </div>
    </div>
    </>
  )
}

export default Login;