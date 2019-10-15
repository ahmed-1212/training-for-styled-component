import React from 'react';
import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100vh;
`

export const Button = styled.button`
  padding: 8px 18px;
  text-transform: capitalize;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: all .5s ease-out;
  outline: none;

  color: ${props => props.theme === 'light' ? '#fff' : '#fefefe'};
  background-color: ${props => props.theme === 'light' ? '#ff4081' : '#6c6565'}
`

export const Footer = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-top: none;
    width: 479px;
    transition: all .5s ease-out;
    background-color: ${props => props.theme === 'light' ? '#f9f9f9' : '#444'}
`

export const Image = props => {
    return (
        <img src={props.src} alt={props.alt}/>
    )
}

