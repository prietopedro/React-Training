import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/spinner'
import Repos from "../Repos/Repos"
import {Link} from "react-router-dom"
import GithubContext from "../../context/github/githubContext"



const User = ({match}) => {
    const githubContext = useContext(GithubContext)
    const {getUser , loading , user, getUserRepos , repos } = githubContext

    useEffect(()=>{
        getUser(match.params.user);
        getUserRepos(match.params.user)
        // eslint-disable-next-line
    },[])

        const chart = `http://ghchart.rshah.org/3C8CE7/${match.params.user}`
        const {name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gist,hirable, company} = user

        if(loading) return <Spinner />
        return (
            <>
               <Link to="/" className='btn btn-light'>Back To Search</Link>
               Hireable: {''}
               {hirable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />} 
               <div className="card grid-2">
                   <div className="all-center">
                       <img src={avatar_url} className="round-img" style={{width: "150px"}}alt=""/>
                       <h1>{name}</h1>
                       {location ? <p>From {location}</p> : null}
                   </div>
                   <div>
                       {bio && (<Fragment>
                           <h3>Bio</h3>
                           <p>{bio}</p>
                       </Fragment>)}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Progile</a>
                        <ul>
                            <li>
                                {login && <Fragment> 
                                    <strong>Username: </strong> {login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment> 
                                    <strong>Company: </strong> {company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment> 
                                    <strong>Website: </strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                   </div>
                </div>   
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                </div>   
                <div className="card text-center">
                    <img src={chart} alt=""/>
                </div>
                <Repos repos={repos}/>      
            </>
        )
    }

export default User
