import React from 'react'

export default class CardTypes extends React.Component{
    constructor(props){
        super(props)
    }
    svg(type) {
        if (type === 'shapes'){
            return (
                <svg className='redfill' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 223.646 223.646" style={{ enableBackground: 'new 0 0 223.646 223.646' }} xmlSpace="preserve">
                    <polygon points="111.823,0 16.622,111.823 111.823,223.646 207.025,111.823 " />
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            );
        }else if(type === 'spades'){
            return(
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 225.371 225.371" style={{enableBackground: 'new 0 0 225.371 225.371'}} xmlSpace="preserve">
                    <path d="M212.205,85.186c-8.983-15.185-28.005-33.898-56.537-55.622c-11.14-8.481-21.397-15.613-28.042-20.103
	                c-12.905-8.721-13.281-8.721-14.866-8.721c-1.581,0-1.956,0-14.856,8.675c-6.649,4.473-16.917,11.579-28.064,20.039
	                c-28.567,21.679-47.643,40.43-56.695,55.731C3.931,100.759,0,115.153,0,133.317C0,179.339,33.921,200.3,65.438,200.3
	                c13.825,0,24.237-3.495,32.023-8.283l-8.619,32.613h47.343l-8.708-32.948c7.828,4.959,18.383,8.618,32.501,8.618
	                c31.495,0,65.393-20.961,65.393-66.983C225.371,115.18,221.434,100.786,212.205,85.186z" />
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            )
        }else if(type === 'clover'){
            return(
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 216 216" style={{enableBackground: 'new 0 0 216 216'}} xmlSpace="preserve">
                    <path d="M161.668,75.201c1.882-5.679,2.832-11.604,2.832-17.701C164.5,26.346,139.154,1,108,1S51.5,26.346,51.5,57.5
	                    c0,6.097,0.95,12.022,2.832,17.701C24.179,76.345,0,101.232,0,131.66c0,31.154,25.346,56.5,56.5,56.5
	                    c14.44,0,27.629-5.45,37.628-14.396L81.962,215h51.733l-12.293-41.665c10.054,9.199,23.43,14.825,38.098,14.825
	                    c31.154,0,56.5-25.346,56.5-56.5C216,101.232,191.821,76.345,161.668,75.201z" />
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            )
        }else if(type === 'heart'){
            return(
                <svg className='redfill' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 225.371 225.371" style={{enableBackground: 'new 0 0 225.371 225.371'}} xmlSpace="preserve">
                    <path d="M159.933,12.904c-26.386,0-40.36,12.722-47.313,22.892c-6.944-10.17-20.897-22.892-47.228-22.892
	                C33.897,12.904,0,33.865,0,79.887c0,18.138,3.938,32.532,13.166,48.132c8.983,15.184,28.006,33.897,56.541,55.622
	                c11.137,8.479,21.396,15.612,28.042,20.103c12.771,8.631,13.271,8.72,14.814,8.721c0.078,0.002,0.153,0.003,0.228,0.003
	                c1.459,0,2.464-0.465,14.673-8.675c6.65-4.473,16.918-11.579,28.065-20.039c28.57-21.681,47.646-40.433,56.699-55.734
	                c9.212-15.571,13.143-29.967,13.143-48.132C225.371,33.865,191.45,12.904,159.933,12.904z" />
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            )
        }
    }
    render(){
        return(
            <span>
                {this.svg(this.props.type)}
            </span>
        )
    }
}