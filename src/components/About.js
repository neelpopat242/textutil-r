import React from 'react'

export default function About() {
    return (
        <div >
                <div className="card bg-dark" style ={{marginLeft : "400px",marginTop :"50px",width: "15rem"}} >
                    <img src="https://i.ibb.co/rdCVL3Z/np.jpg" style={{maxWidth : '100%',height:'auto'}} className="card-img-top" alt="..."/>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Neel Popat</li>
                        <li class="list-group-item">B.Tech in Computer Science , Ahmedabad University</li>
                        <li class="list-group-item"><a href="https://github.com/neelpopat242" target="_blank"  rel="noopener noreferrer" class="card-link">Github</a></li>
                    </ul>
                </div>
            </div>
    )
}
