import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function Home_page() {
  const navigate = useNavigate();

  const goToInformation_page = () => {
    navigate('/bmi');
  };

  return (
    <div   className='background-home'>
      <div className='main-box'>
        <div className='logo'></div>
        <div className='secon-box'>
          <div className='title-box'>
            <h1 className='title-text'>พอดีคำ</h1>
          </div>
          <div className='welcome-box'>
            <h1 className='welcome-text'>ยินดีต้อนรับเข้าสู่การรับประทานอาหารอย่างมีประโยชน์</h1> 
          </div>
          <div className='button-box-home'>
            <button onClick={goToInformation_page} className='button-text-home'>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_page;