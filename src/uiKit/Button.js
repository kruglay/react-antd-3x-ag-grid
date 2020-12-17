import React from 'react';
import {Button as AntdButton} from 'antd';
import {invButton} from  '../styles/components/Button.module.scss'

export const Button = (props) => {
	return <span className={invButton}><AntdButton {...props}>{props.children}</AntdButton></span>
}
