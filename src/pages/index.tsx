import type { NextPage } from "next";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LandingPage: NextPage = () => {
  const router = useRouter();
  const userRole  = useSelector((state: any) => state.user?.role);
  
  const dispatch = useDispatch();
  const handleSignup = () => {
    router.push("./p/sign-up");
  };
  const handleSignin = () => {
    router.push("./p/sign-in");
  };
  const handleDoctor = () => {
    router.push("./d/sign-in");
  };
  useEffect(() => {
	console.log("EEEEEEEEE",userRole)
    if (userRole == "ADMIN") {
      router.push("./a/dashboards");
    }
	else if (userRole == "PATIENT") {
		router.push("./p/dashboards");
	  }
	  else if(userRole=="DOCTOR")
	  {
		router.push("./d/dashboards");
	  }
  }, []);

  return (
    <div className={styles.myBody}>
		
      <div className={styles.landingPage}>
        <div className={styles.footer}>
          <div className={styles.healhtycarelyParent}>
            <b className={styles.healhtycarely}>
              <span>Healhty</span>
              <span className={styles.carely}>Carely</span>
            </b>
            <div className={styles.thisFreeAppContainer}>
              <p className={styles.youAOneStop}>
                This free App provides a solution to your health needs by
                offering
              </p>
              <p className={styles.youAOneStop}>
                you a one-stop access to complete information about various
              </p>
              <p className={styles.youAOneStop}>
                medical checkups. This App carries simple tips and advice to
              </p>
              <p className={styles.youAOneStop}>
                help you maintain a healthy lifestyle.
              </p>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.overviewParent}>
              <b className={styles.overview}>Overview</b>
              <div className={styles.checkingHealthParent}>
                <div className={styles.checkingHealth}>Checking Health</div>
                <div className={styles.checkingHealth}>Find Docter</div>
                <div className={styles.checkingHealth}>Make a Schedule</div>
              </div>
            </div>
            <div className={styles.overviewParent}>
              <b className={styles.overview}>Company</b>
              <div className={styles.checkingHealthParent}>
                <div className={styles.checkingHealth}>Home</div>
                <div className={styles.checkingHealth}>About</div>
                <div className={styles.checkingHealth}>Services</div>
              </div>
            </div>
            <div className={styles.overviewParent}>
              <b className={styles.overview}>Explore</b>
              <div className={styles.checkingHealthParent}>
                <div className={styles.checkingHealth}>{`Terms & Conds`}</div>
                <div className={styles.checkingHealth}>Privacy Police</div>
                <div className={styles.checkingHealth}>Cookies</div>
              </div>
            </div>
            <div className={styles.overviewParent}>
              <b className={styles.overview}>Social Media</b>
              <div className={styles.brandFacebookParent}>
                <img
                  className={styles.brandFacebook1}
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqhCE1ZItBk2eXdpda7hUVibZjDbg_iVhUzQ1_xvmjQ&s"
                />
                <img
                  className={styles.brandFacebook1}
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
                <img
                  className={styles.brandFacebook1}
                  alt=""
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.testimonial1}>
            <div className={styles.testimonialChild} />
            <div className={styles.healthycarelyIsAnContainer}>
              <p className={styles.youAOneStop}>
                “Healthycarely is an website and mobile app
              </p>
              <p className={styles.youAOneStop}>
                for you to feel better or get medical help.
              </p>
              <p className={styles.youAOneStop}>
                We offer you a 24/7 doctor service with no
              </p>
              <p className={styles.youAOneStop}>appointment needed”</p>
            </div>
            <b className={styles.naufalHidayat}>Naufal Hidayat</b>
            <b className={styles.studentAtTelkom1}>
              Student at Telkom University
            </b>
            <img className={styles.testimonialItem} alt="" src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais" />
            <img
              className={styles.arrowLongRight2}
              alt=""
              src=" https://png.pngtree.com/element_our/20190528/ourmid/pngtree-right-arrow-image_1129437.jpg"
            />
            <img
              className={styles.arrowLongRight3}
              alt=""
              src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-right-arrow-image_1129437.jpg"
            />
          </div>
          <div className={styles.title}>
            <div className={styles.theirImpressionAfter1}>
              their impression after using this application
            </div>
            <b className={styles.ourPatientsFeedback1}>
              Our patients feedback about us
            </b>
          </div>
        </div>
        <div className={styles.ourRating}>
          <div className={styles.cardParent}>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.parent}>
                  <b className={styles.b}>900+</b>
                  <div className={styles.verifiedSpecialistParent}>
                    <b className={styles.overview}>Verified Specialist</b>
                    <div className={styles.highlyVerified}>Highly Verified</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardChild} />
            </div>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.group}>
                  <b className={styles.b}>45000+</b>
                  <div className={styles.verifiedSpecialistParent}>
                    <b className={styles.overview}>Happy Costumers</b>
                    <div className={styles.highlyVerified}>
                      Highly Performance
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardChild} />
            </div>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.container}>
                  <b className={styles.b}>99,7%</b>
                  <div className={styles.verifiedSpecialistParent}>
                    <b className={styles.overview}>Positive Feedback</b>
                    <div className={styles.highlyVerified}>
                      Costumers Apporove
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardChild} />
            </div>
          </div>
          <div className={styles.ourRatingParent}>
            <b className={styles.findDoctor}>Our Rating</b>
            <b className={styles.wereEmployeeBenefitContainer}>
              <p className={styles.youAOneStop}>We’re employee benefit at</p>
              <p className={styles.youAOneStop}>{`7500+ hospital `}</p>
            </b>
          </div>
        </div>
        <div className={styles.scheduleSection}>
          <div className={styles.frameGroup}>
            <div className={styles.makeASheduleParent}>
              <b className={styles.findDoctor}>Make a Shedule</b>
              <b className={styles.makeAScheduleContainer}>
                <p className={styles.youAOneStop}>Make a schedule in advance</p>
                <p className={styles.youAOneStop}>with the available doctor</p>
              </b>
            </div>
            <div className={styles.healthcareIsAContainer}>
              <p className={styles.youAOneStop}>
                Healthcare is a very painful process, especially if you’re not
                taking care
              </p>
              <p className={styles.youAOneStop}>
                of your health and having regular check-ups. HealhtyCarely makes
                it
              </p>
              <p className={styles.youAOneStop}>
                easier for everyone to schedule a doctor’s appointment.
              </p>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Blue_check_PD.svg" />
                <div className={styles.makeASchedule7}>
                  Make a schedule online is easy
                </div>
              </div>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Blue_check_PD.svg" />
                <div className={styles.makeASchedule7}>
                  Easy to connect with doctor
                </div>
              </div>
            </div>
            <div className={styles.makeScheduleNowWrapper}>
              <div className={styles.contactUs}>Make Schedule Now!</div>
            </div>
          </div>
          <img
            className={styles.scheduleSectionChild}
            alt=""
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSEhUYEhgSEhIRERgRERIRERESGBgZGRgUGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQkISs0NDQ0NDQ1NDQ0NDQ1NjQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQxNDQ0NDE0NDQxNDQ0NDQ0NP/AABEIALEBHQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQIEBAQEAQsDAwUAAAABAgADEQQSITEFQVFhInGBkQYTMqGxBxQjQlJicoLB0eEWsvBzkqIVJDNEU//EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACMRAQEAAgMBAAICAwEAAAAAAAABAhEDITESQVETMgQiYRT/2gAMAwEAAhEDEQA/APZoQhACEIQAhCEAIQhAEkVSSmR1Iyp6xYixYGJVxu0tSrjdoBSCxH0gGiO8yFcAlpN8uRU95aBhDQFDNXC/SJnuZoYUeERwk8IQMZIau4kwkNTcSYQAhCLAyRIsIEjUaySMXeSQEJKmO2lyVMbtAMxpC8ssJC8y0iWSARBHgQDoYQhGQhCEAIQhACEIQBDI6kkMqY3EBBfc20F7e55QJaizi+M/EL0lFTMMmpNswIOmVfDz1tYnl5znKPx9Up1GLh2uCopst1zWHiOpKG/6ve3QxbjXzdPV5Wxm0xfhz4toY3wDwVQoZ6bHUGwJAPMi407zaxm0ZKdojLHBYMsAqhfFLSyvbWPDWiB7y/hj4RM5po4YeERwJoGEDGENTcSYSJ9xJRAiwhAwMkJFUqhZRxHECoJ0AGkVshyWtBd5JOUxfxAadiRfMwUW7843/VWVgHXMD00ImP5MWpx5OtlXG7RMBjkrrnpm42I5qehEXG7TfsYs0oGQOJYMiaIIljwY1ZJaBt6EIRkIQhACEIQAhCEAir1MqljyF55vjuPtUZjnVEpOwf8ARvUarUKDKqWIuLs3oO+nf8VTNRqAc0YaeU4L4MwKgOz+Js5vmGmYHe3pJ55WWSK8eMyltcD8R42tiHOag6qpZ1D/ADKgQm17D6RtyAnP08FVr2ABbLe4Y3Iv0B5aD2E994goJvb7TCq4RBdggHWwAk7yXFfHhxyeT1aeIwjpULOr02DIwY3QLawB9/efQXA+J/neEo4jS9Smpe2wqDwuB/MGnnXG+G/PpMigFgcydyOU6T8mVT/2TUjvRrutr65WVXuempf2m+PP69S5uP58dWDEYwzQYyqCEnWKWic46IGX1mthj4RMm+s1cP8ASI4KmiGKIjRkjYaiSiRNuJKIASOq9hJJn4ypYxW6jUm6gr1TM3ELcKD1lmq+56WlWpUFlPeQyu1pNKWPpjKtxezaTnuIfVN3iVey37znOIVNj1kr6ri0vhzHtQqBtbHwuOq/4noWKYFQRqDYjynleGq7HrPQeFV8+HW+6eD0G32leLL8I8uP5TGROJLGGWRQpJQI0CPEDbkIQjIQhCAEIQgBCEIBWxtZadNnf6VVmawucoGuk5LhVMU1rNlN1qFrAalSAwA9SZ1+Ioh1ZDqGUqfIixnO4PCsgqrVNyXDAi+q2Ci3bQH17SXJLuL8WtX9sLF/EBLZHovTW9szvTt7XvIuJY4U6Za45Wvtrz7yXiXAKdVwXdgF/VzNl9r29xF43g0CIMugGX0E57v2uvHXkYHCa6u+dqzVDuBTChFHRrTpvhNBTq1qY6NUNtiGcMvsHImThqCgAKLA8p2HB+GimGrXu1bLawAsq3sL8yd/QTXFLcuk+azHG7/LQCxjLFW8GBnW4UYGsVhGKdY9hEEIGomvhzpMjmJsYceERwVLEaLEaMkZ3ElEiO4ksBAZg8WfLqe/4TemD8QpmRyP1dZPPxTj/sqB8wbuAftM35l6YP7xEuYb6L9UH4TNDWoDux/GRqytjmzJbqDMbEG6C/n/AHmniagDIOukoYynl06E+xmK3FbD6W9xO9+G6l6TDoVP2/xOHw1OxynzWdn8MCyOP4f6zfH/AGY5fGzInkpEjcTocxoEdEEWBt2EIRkIQhACEIQAhCEAaZWxiAqTpe2h5+UssZSxp+k9wvq2g+9oa2N67chxStlte9iwX72mLxXHsSyh1I1JzPmZCbaDLyPTvNvG4sK+VhY30JGlwbEHoZlcQpo7By3PUaWnFl69HDKflX4fXdrE7EGxsVudri+s9JogCigGtlUettZ5PjOIBWsNQLDw78gEA6n+09E4JiG+SqVSA6imra6Byo8N/MgS3BPa5/8AJyl0vBormJaxI5jccxEvLuY0DWKTGqdYpMQQN9Qm1h9pjsfEJsYceERwVLGtHRrRkZzksi5yWAgmVxdPC/dD+E1ZR4ql0Y/ukTOXjeN1XP0xamP4R+EzMTpSQdWmvjhkQDoAPtMbizWWmvYkznyWnbn8fUs9yfp2mvxSkMqOB9SA/aUH4e1Vh3ILeXSdBxGmMgT9lRMSdKW+Oew6Zh3E6r4ce2ZTvYTFwuE8enadDgqWV1I53B8pvCd7TzvWmxaROZI0gedFc5qyQSFTJRA25CEIyEIQgBEJiyKrABqoHrICxfnp5RKmo8pAlewtGS2oPPlKHHmIouV3UZx/KQ39Ii8QSmf0jqmZgqB3ALtbZRzO+glnEkMt7b8mFtO4jnRVzXGOGfnSCtRIDsgJVvoqdj+y3K/v28+dznNApUWsTlFI5mdjrbL1GhN72sDynovDcUuHSrTqNlXD53uf/wA9wfa3vPPuIfFtQuMbSAUK9SiEKjxUrqcpa1wx0uRsYrwTK7nR4c+WM1e27wb4eFMiriLM6nMiA3Sm3Un9du+w5dZ0HDkFalUzjMlapUUg86YApkeuU+8z2xwrUUejr84KKYO+ZzlCsORB0PkZ0FLDiki012RQlzztpc+c3cZhjqMTLLPL6rB+G8Yzq1Gq5ephar4Z3J8TqtmpuT1ZWUnvedK72yg63UE3395xtBvl8QxSjT5lDC1rfvDOhPsq+06hmuR6D0Ewouot7leXXSKVlSiTe19DvJUqZgfPTyisAI8Qm1Q+kTEG4m3Q+keUIKkiNFjWjI3nJLSMbySAhZVx48B9JZkOJTMhHaK+HPXN8WN1I7iZWLwVSq4KISqgC+yzqEwat4qguNwDHVaoAsNB2k5x/Xday5pj4wqGENMEka9BKOJpVWuQu82atXWRlzNfwxL/ANNY3DsI6klrkn0AnTYDDFVztvew7CUkaW0qkbHTpH8SCc1y9WSZE5j1a8ieFbnZqmSAyFZIDA3QQhCMhCEIAkq16gB1v52OX32j6tTkNfwld789LxwqEbXzlaoLXkdSr8s6kW0tro3bsZLiN4w5b4m0qYNhuMdT16eCpOtVy63O/PvOU+KGscKemOoffOP6zpsOfCPf3gHJfHGF8K1L2RiFq/vZfGl/UH/tE8zq4gKUdFuoqfNC8tGAy2/lPqZ7b8RcOOIw1Wmo8TI2T/qDVPuBPBMK4KIDcZUfNfQgl2bX3lePLc0nljrt6Z8AUmqVHc60qbfOp9BUq5hlHawzdie86H4orumHcU2CPUanSpsQGys7qpfKd8qlmt+7G/BvDThMFSpuLPUHz6gP1BnsQp/hXKv8si47gFq1KFRyQaNUOmU2FyCpB9LyeV3dt4zUc5/pVL50eujqo/TmrUaqW3BIJsVvqVy27Ta+FeKviUIqgCrRZqVbLopddnHZgVb1mzksJl8B4alKriKi3vUamXvbLcLYZR5W9plpsnQelolDe3aMruBH0HCgliLkcyBp6wvhJVPiE1qT2ExaVQMVZTcMLiaqISN4odTmpGmrGjD9THDDiMjRV1kwqxopAR1gIAB4EwziQYipaNm3SPEVZmV6kfXqyqTeOOfPLZpiER0SaSKgkyGQiPBireN0sqbRKzwWMr7TGUdWF/CFHk4aVka0nDTKrpoSLPEuZrTG0t4yoeQ9YljFMAhdwo0t/WZ2IrZRmcnU2GjMzHoqi5J7CXKuKUMEFr2zHsNh7/0lBeJo1Z6VxnQIbc8jC4I7Xv7Qt13RJ9XUMxGEaqhAUkNYjOMjAg3DWaxBBAMtph3yLmABCgNci1xJXxgVbnl95hY/iLuM4PhGhUf83mMuWYxTDhuVRcawCVQiuUqZKtOqi/MZLOmqG4HXkdJqYKtnUG1syq1ja9iLicxjTly1F1R9W/hPP0m3wevn8JNylvVeRmMOX6y1VeXg+cdztuptPEMdgaFPitanUOXD08R8ypcZrqQtRqQHO7MU8vKe2g2E8C45UY4nEs5uz4uuSeeVXdVHlb8BLy63XLrfTv8AF/lEw1yQlR/5UUfczFxf5QTUzNSoogTKQK1X9I7X3VVGvvPPsTWtKgqRNO+Px1XqeF8qg6HIutvWbtDEs6ArWdgwB0aw+1p5N8y02eC8Zamw5rzEVhyvRFTqWb+JmbX1McKV9LDXTYTOTilMqGzABtrkCbHBWWrUGU3CDO3MdB9/wih1uVQKCIB+qADbruf6y5guMqRI3p3VhubXHmJlCsOgEL1Sncb1TjIAvKn/AK+Tsp9pltWJ2HsI5FY7KYt0ai9U4u52Eh/Pqrc7Rowjt2mnw3hljnqG4XYdTCbououYCkUTM5uza+Q6SPE1JYxFSZdZ7ykjnzyRObxsWKBNIkiGKRaMvBmnAx4kYMeDARZQwcXU+8YhkizNi+FZyvLAaUc1mI6EiSq8k63Z2hIyh/aMiai3Ij1uJRhOTK2Jbly3MkpqQLN15Svih/mBOaw2KLu9T9prL2QaKP8AnWNxeESpUWqQQwUWZWKVEZTyYa2OmmxtMvE58O5Uq1mdshAurLfTUdrTRwvzHAJX5Y01fQ27Lv72lcpjr/iWP1v/AK2qal11PLpvMg4Yo7W2ZfGORtsR3m1h3vcDkBIsVhQ/PKeonLnhvuOzj5bj1kwRTNmpnY3dO3X+/vG8Jq/KYE/qlk1vbLfQ39pqNgCMpzXKrl6XvuT7Rx4cpy3OwAbvY3kZx5S7Xy5sbNW+rf58G+kFvK1veeHfE+KVsTWdRlDVamlwdcxvqO9zPYOK1Pzai9QaCnTdxbQXANvvafP3EMSSTrc8z1M6nF1+EFWrcxqPIC0cpjCyTH0AzMqIMzOQqgGxJMTDIXdVALXYXCmzFdzb0vN3EYfDBgVV6RUgggVMwI539pjLLXTeOH12gfhuKBy5BpyFTaehfk6p/KouarKtR6mqlhdaaiy+dyWPrOPoKSQaWJZvPI/vcTawz1F0dkYc7U2Vj97SX8li/wDDjf29MptCnhFLEkbm8y+FVrUkvdgVtfprsTbT1m1hnv6S/uMrlv8ArlYkTDqOUkCAco2ORbmwiCWklz+MmquALCLogtM/E15uRLLJHiat5UvFJvJ6FAsbRo92okSWGwxy3U6yrUcrWVOWs0aJ0ImrNJ4ZTK2fq6ZbX5xol3EpzlNhELNEjgY2AMZLCGTqZWQydDM1XCucx2KC1XXo346xVxglfjuCb55cXs6qdOoFv6SKlhmt/iRvVd07keoxYkJRgyp0lDFUyRYMy91IJ/8AIGaDCQVEgTlq+GcNf5zvrs2Uf7QJo4N72DgN5gGXamFB3EamFA2i0e0zUkUZlAUnTS/4SApeWGTS0aqWjJXaj3kTUG5Wl68BaGw4z8oK1/zJ0o02qNUempCWJVAcxbfbwges8Jr4SqpOem6nnmRx97T6lxFMMtpg43gFOpqRY9V0MDfOVOkzmyqzHoqsx9hNLDcBxNT6cNWPf5FQD3ItPaP9K5CTTqOl/wBklSfUSanwqqv/ANip6tm/3Xi2enlOG+E8atmGHdbc2emlv+5gZq4X4fxmxVL8gXUk9tNPvPRWwDn6qha37Sr/AEAmjRoimoKoah0zZSob/wAjM5a141hbL1XnGA+FcRUP6SkiC5BLlSfYX/GdVhvhShSTNUu9lzGzMqeQF9p1CFHHiVlzCxDaEeoja6q5FM/T4ee4B2kfl0fbFwZqVUAoUyqW8JP6NT5X1PnNnBYWsv1qDccmuR/ebSIALAWttHES+OEjky5LfWctIntLSKFFxFcACUsRXtpNyJZZUYnETPY3gxvHoQDrGjbs+lTlqk4BGsy8QtR//jdV5WcEfcStT4biCQzVEFmBtmJ0GvSZu9r4zGT1a4qMtVG7zQpGUuMLordLG4ljCPcCVveMcHH/AK82U/fZ9aVaqaXlqvtI7XEyvYoExAYVdPSQl401xDJ0aUqLyyjaGJvGrKYdam42kowK9Izhz+IjtNKYs7dWGW4uQhCDQjSI4xIBGVjckkMaRGEZWNIkpEaREEJWAWPIhAGMshKydjIWgDCsYyCSGJAK7UYqIRJ7RLRaPYWI1BWIJAuNjzEcI8RaPdW0OkXNIlaOM2xpFimsLzFq1LmbOJS4tMY8OOcMXJAN8thaNLLHK+J8DRznXYfeXm4ah11HkxjqDcrWlgRbbmEk1e1I8KXcMRfyMaeGtyb3E0RAmG6P48f0ysVhGKZCRcDQytg1ZQAwtprNHEnWRKsf11pG8M+vqe+Ia+0ZQe6+UsOneRZLcxFtr4u1HFLrfrM8tv2mrVAPeVa1BQCe0cyiefDl6r4eprLiNqfK8yVexl9HvY9ppLHJdwFSzjvpN2crTq2dT0InThpnJ1cF3uL0UQhMrAxDCEAaYhhCMGxDCEQNjYQjBrSFoQiBpiQhEBCEIwI4QhEaZI+EJojHlcwhED6csCEIA8RGhCMKOI3jViQiY/JtTaUmhCJuGyDE/SfIwhFPRl/Wsht5dw+0SEu82ekf6hOuo7DyEITGTp/xva//2Q=="
          />
        </div>
        <div className={styles.findDoctorSection1}>
          <div className={styles.text4}>
            <div className={styles.makeASheduleParent}>
              <b className={styles.findDoctor}>Find Doctor</b>
              <b className={styles.makeAScheduleContainer}>
                <p className={styles.youAOneStop}>
                  Find the right doctor according
                </p>
                <p className={styles.youAOneStop}>to your complaint</p>
              </b>
            </div>
            <div className={styles.healthcareIsAContainer}>
              <p className={styles.youAOneStop}>
                HealthCare.ly is a free, health app that goes beyond matching
                you with doctors.
              </p>
              <p className={styles.youAOneStop}>
                It actively helps you find the right doctor based on your
                medical and personal
              </p>
              <p className={styles.youAOneStop}>
                needs and connects you with your HealthCarely community for
                ongoing
              </p>
              <p className={styles.youAOneStop}>
                support throughout your journey to healthier living.
              </p>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="Group 3.png" />
                <div
                  className={styles.makeASchedule7}
                >{`100% free app designed to help you find the right doctor for you. `}</div>
              </div>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="Group 3.png" />
                <div className={styles.makeASchedule7}>
                  Available 900 doctors specialist
                </div>
              </div>
            </div>
            <div className={styles.makeScheduleNowWrapper}>
              <div className={styles.contactUs}>See the Doctors</div>
            </div>
          </div>
          <div className={styles.findDoctorSectionChild} />
          <img
            className={styles.femaleDoctorFococlippingRemIcon}
            alt=""
            src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
          />
          <div className={styles.availDoctor}>
            <div className={styles.availableDoctorsParent}>
              <b className={styles.findDoctor}>Available Doctors</b>
              <div className={styles.selectDoctors}>Select Doctors</div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon2}
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
                <div className={styles.availableDoctorsParent}>
                  <b className={styles.findDoctor}>Dr. Adinda</b>
                  <div className={styles.selectDoctors}>Eye Specialist</div>
                </div>
              </div>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon2}
                  alt=""
                  src="Mask group.png"
                />
                <div className={styles.availableDoctorsParent}>
                  <b className={styles.findDoctor}>Dr. Jackson</b>
                  <div className={styles.selectDoctors}>Ear Specialist</div>
                </div>
              </div>
            </div>
            <div className={styles.findDoctorWrapper}>
              <div className={styles.findDoctor1}>Find Doctor</div>
            </div>
          </div>
        </div>
        <div className={styles.stepSection}>
          <div className={styles.card3}>
            <div className={styles.checkHealthComplaintsParent}>
              <b className={styles.checkHealthComplaints1}>
                Check health complaints
              </b>
              <div className={styles.checkTheDiseaseContainer}>
                <p className={styles.youAOneStop}>
                  Check the disease so you can
                </p>
                <p className={styles.youAOneStop}>
                  easily choose the right specialist
                </p>
              </div>
              <img
                className={styles.iconlybulksearch}
                alt=""
                src="Iconly/Bulk/Search.png"
              />
            </div>
            <div className={styles.cardChild} />
          </div>
          <div className={styles.card4}>
            <div className={styles.checkHealthComplaintsParent}>
              <b className={styles.checkHealthComplaints1}>
                Choose doctor Specialist
              </b>
              <div className={styles.checkTheDiseaseContainer}>
                <p className={styles.youAOneStop}>
                  Choose a specialist according
                </p>
                <p className={styles.youAOneStop}>to your disease complaints</p>
              </div>
              <img
                className={styles.iconlybulksearch}
                alt=""
                src="Iconly/Bulk/Profile.png"
              />
            </div>
            <div className={styles.cardChild} />
          </div>
          <div className={styles.card5}>
            <div className={styles.checkHealthComplaintsParent}>
              <b className={styles.checkHealthComplaints1}>Make a Schedule</b>
              <div className={styles.checkTheDiseaseContainer}>
                <p className={styles.youAOneStop}>
                  Make a schedule with the doctor
                </p>
                <p className={styles.youAOneStop}>
                  concerned so you can start the
                </p>
                <p className={styles.youAOneStop}>examination</p>
              </div>
              <img
                className={styles.iconlybulksearch}
                alt=""
                src="Iconly/Bulk/Calendar.png"
              />
            </div>
            <div className={styles.cardChild} />
          </div>
          <div className={styles.card6}>
            <div className={styles.checkHealthComplaintsParent}>
              <b className={styles.getYourSolutions1}>Get your Solutions</b>
              <div className={styles.afterConductingAnContainer} />
              <img
                className={styles.iconlybulksearch}
                alt=""
                src="Iconly/Bulk/Star.png"
              />
              <div className={styles.afterConductingAnContainer}>
                <p className={styles.youAOneStop}>
                  After conducting an examination
                </p>
                <p className={styles.youAOneStop}>
                  with a specialist we can help find
                </p>
                <p className={styles.youAOneStop}>the right healing method</p>
              </div>
            </div>
            <div className={styles.cardChild} />
          </div>
          <div className={styles.title1}>
            <b className={styles.findDoctor}>Fast Solutions</b>
            <b className={styles.makeAScheduleContainer}>
              step by step to get your solutions
            </b>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.cardProfileDoctor1}>
            <img
              className={styles.cardProfileDoctorChild}
              alt=""
              src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg"
            />
            <div className={styles.drShimantaParent}>
              <b className={styles.findDoctor}>Dr. Shimanta</b>
              <div className={styles.selectDoctors}>Skin Specialist</div>
            </div>
            <div className={styles.makeScheduleWrapper}>
              <div className={styles.makeSchedule}>Make Schedule</div>
            </div>
          </div>
          <img
            className={styles.femaleDoctorFococlippingRemIcon1}
            alt=""
            src="https://www.telegraph.co.uk/content/dam/health-fitness/2023/04/14/TELEMMGLPICT000332075420_trans_NvBQzQNjv4BqSdnVs1xxx3yeSXN55W0GtK1UDbDdk-JPjedL466dDsg.jpeg?imwidth=680"
          />
          <b className={styles.medicalCareNowContainer}>
            <p className={styles.youAOneStop}>Medical Care Now</p>
            <p className={styles.youAOneStop}>
              <span>{`Simplified For `}</span>
              <span className={styles.carely}>Everyone</span>
            </p>
          </b>
          <div className={styles.healthCarelyIsContainer}>
            <p className={styles.youAOneStop}>
              Health carely is a new way to get health insurance quotes. We
              offer tools similar to those
            </p>
            <p className={styles.youAOneStop}>
              provided by insurance companies for free and prices are based on
              donations and not
            </p>
            <p className={styles.youAOneStop}>
              restrictive health plan networks.
            </p>
          </div>
          <div className={styles.btnPrimary}>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
          <div className={styles.navbar}>
            <div className={styles.healhtycarelyGroup}>
              <b className={styles.healhtycarely}>
                <span>Healhty</span>
                <span className={styles.carely}>Carely</span>
              </b>
              <div className={styles.homeGroup}>
                <div className={styles.contactUs}>Home</div>
                <div className={styles.contactUs} onClick={handleDoctor}>
                  Doctor
                </div>
                <div className={styles.contactUs}>Services</div>
                <div className={styles.contactUs}>Review</div>
              </div>
            </div>
            <div className={styles.signInParent}>
              <div className={styles.contactUs} onClick={handleSignin}>
                Sign In
              </div>
              <div className={styles.signUpWrapper}>
                <div className={styles.contactUs} onClick={handleSignup}>
                  Sign Up
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
