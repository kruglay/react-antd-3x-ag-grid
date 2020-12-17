import React from 'react';
import {Select as AntSelect} from 'antd';
import {invSelect} from  '../styles/components/Select.module.scss'

const Select = (props) => {
	return <AntSelect className={invSelect} {...props}>{props.children}</AntSelect>
}

Select.Option = AntSelect.Option;

export {Select};
