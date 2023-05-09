import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <div className="flex items-center gap-6">
        <button className="relative"><div className="absolute -top-1 -right-[3px] bg-[#FF5B5B] w-2 h-2 rounded-full"></div><svg width="23" height="25" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2105 15.392L22.0775 7.71899C21.452 5.47168 20.0934 3.49786 18.2176 2.1112C16.3418 0.724527 14.0563 0.00455966 11.7244 0.0656994C9.39244 0.126839 7.14784 0.965578 5.34724 2.44864C3.54664 3.9317 2.29334 5.97399 1.7865 8.25099L0.135499 15.676C-0.0467632 16.4965 -0.0424109 17.3474 0.148235 18.166C0.338881 18.9845 0.710952 19.7498 1.23697 20.4053C1.763 21.0609 2.42954 21.5898 3.18738 21.9533C3.94523 22.3167 4.77502 22.5052 5.6155 22.505H6.8655C7.12288 23.7739 7.81108 24.9148 8.81347 25.7342C9.81586 26.5537 11.0708 27.0014 12.3655 27.0014C13.6602 27.0014 14.9151 26.5537 15.9175 25.7342C16.9199 24.9148 17.6081 23.7739 17.8655 22.505H18.8065C19.6717 22.5052 20.5252 22.3054 21.3004 21.9212C22.0755 21.5369 22.7514 20.9786 23.2751 20.29C23.7988 19.6013 24.1561 18.8008 24.3193 17.9512C24.4824 17.1015 24.4469 16.2257 24.2155 15.392H24.2105ZM12.3635 24.75C11.6695 24.7472 10.9933 24.53 10.4274 24.1281C9.8616 23.7263 9.43377 23.1594 9.2025 22.505H15.5235C15.2922 23.1594 14.8644 23.7263 14.2986 24.1281C13.7327 24.53 13.0575 24.7472 12.3635 24.75ZM21.4835 18.93C21.1708 19.3449 20.7656 19.6811 20.3002 19.912C19.8348 20.1429 19.322 20.262 18.8025 20.26H5.6155C5.1111 20.26 4.61315 20.1466 4.15844 19.9283C3.70373 19.71 3.30388 19.3923 2.98843 18.9987C2.67299 18.6051 2.45 18.1457 2.33595 17.6543C2.22189 17.163 2.21969 16.6523 2.3295 16.16L3.9795 8.73399C4.37835 6.94611 5.36319 5.34278 6.77757 4.17868C8.19194 3.01457 9.95475 2.35647 11.786 2.30889C13.6172 2.26132 15.4118 2.82701 16.8847 3.9161C18.3576 5.0052 19.4244 6.55524 19.9155 8.31999L22.0485 15.993C22.1894 16.4928 22.2119 17.0185 22.1142 17.5285C22.0165 18.0385 21.8012 18.5187 21.4855 18.931L21.4835 18.93Z" fill="black"/></svg></button>
        <Link to="/settings" className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-[#F3F1F1] rounded-full overflow-hidden"><img src="/images/person.png" alt="profile" className="w-full h-full object-cover object-center" /></div>
          <div className="hidden sm:flex items-enter gap-4">
             <div className="text-left h-full">
               <div className="text-[#3D3D3D] font-[800] mb-[2px]">John Carter</div>
               <div className="text-[#C8C8C8] text-sm font-[500]">Account Settings</div>
             </div>
             <div className="self-center"><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.37522 0.186006C9.31664 0.126896 9.24694 0.0799764 9.17013 0.0479565C9.09333 0.0159365 9.01093 -0.000549316 8.92772 -0.000549316C8.8445 -0.000549316 8.76211 0.0159365 8.6853 0.0479565C8.6085 0.0799764 8.53879 0.126896 8.48022 0.186006L5.59422 3.07201C5.53565 3.13111 5.46594 3.17803 5.38913 3.21005C5.31232 3.24207 5.22993 3.25856 5.14672 3.25856C5.0635 3.25856 4.98111 3.24207 4.9043 3.21005C4.8275 3.17803 4.75779 3.13111 4.69922 3.07201L1.81422 0.186006C1.75591 0.127239 1.6866 0.0805321 1.61024 0.048552C1.53389 0.0165719 1.45198 -5.55093e-05 1.36919 -0.000380516C1.28641 -0.000705523 1.20437 0.015278 1.12777 0.0466576C1.05116 0.0780371 0.981485 0.124199 0.922719 0.182506C0.863952 0.240813 0.817245 0.310123 0.785265 0.38648C0.753285 0.462838 0.736658 0.544747 0.736333 0.62753C0.736008 0.710314 0.751991 0.79235 0.783371 0.868957C0.814751 0.945563 0.860912 1.01524 0.919219 1.07401L3.81122 3.96601C4.16559 4.31988 4.64592 4.51864 5.14672 4.51864C5.64752 4.51864 6.12785 4.31988 6.48222 3.96601L9.37422 1.07401C9.4916 0.956111 9.55758 0.796575 9.55777 0.630211C9.55796 0.463847 9.49233 0.304163 9.37522 0.186006Z" fill="#C8C8C8"/></svg></div>
          </div>
        </Link>
    </div>
    </>
  )
}

export default Navigation;