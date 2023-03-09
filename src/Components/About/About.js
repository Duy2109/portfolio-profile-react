import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./About.css";
import ProfilePic from "../../Image/avatar.jpg";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5 className="font-form">About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p className="font-form">
                Tôi là nhà phát triển phần mềm toàn ngăn xếp (MERN Stack), Udemy
                và Người hướng dẫn Skillshare. Tôi đã lấy bằng cử nhân Kỹ thuật
                phần mềm và hiện tại, tôi đang học Thạc sĩ Khoa học dữ liệu tại
                Đại học TU Dortmund, Đức. Tôi đã làm việc trong một số công ty
                phần mềm quốc tế, nơi tôi đã học đủ kiến ​​thức về phát triển
                phần mềm và làm việc trên một số phần mềm quy mô lớn. Tôi đã dạy
                lập trình, phát triển web, phát triển di động và UI/UX trên
                Udemy và chia sẻ kỹ năng từ năm 2018.
              </p>
              <p className="font-form">
                Tôi đã dạy hơn 100 nghìn sinh viên trên Udemy từ khắp nơi trên
                thế giới. Tôi thích chia sẻ kiến ​​thức của mình với người khác.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
