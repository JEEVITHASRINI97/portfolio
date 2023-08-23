import React from 'react'

function Backend() {
  return (
    <div className="skills__content">
    <h3 className="skills__title"> Backend Skills</h3>
   <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Beginner</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">NodeJS</h3>
                <span className="skills__level">Intermediate</span>
            </div>
        </div>

        <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">MongoDB</h3>
                <span className="skills__level">Beginner</span>
            </div>
        </div>
        </div>   

        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">AWS</h3>
                <span className="skills__level">Beginner</span>
            </div>

        </div>
        </div> 

   </div>
   </div>
  )
}

export default Backend