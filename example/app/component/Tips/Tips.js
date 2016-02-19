'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import style from './tips.scss';

function notice(text,duration,type){
    let div = document.createElement("div");

    const Tips = React.createClass({
        getInitialState: function(){
            return {
                isShow: true
            };
        },

        componentDidMount: function(){
            var _this = this;
            _this.Timer = setTimeout(function(){
                _this.close();
            },duration)
        },

        componentWillUnmount: function(){
            this.clearCloseTimer();
        },

        clearCloseTimer: function() {
            if(this.Timer){
                clearTimeout(this.Timer);
                this.Timer = null;
            }
        },

        close: function(){
            this.setState({
                isShow: false
            })
        },

        render: function(){
            return (
                    this.state.isShow ?
                    <div className="u-miniTips-container">
                        <div className={ "u-miniTips " + this.props.type }>

                                <i></i>
                                <p>
                                    {this.props.text}
                                </p>

                        </div>
                    </div>: null

            );
        }
    });

    document.body.appendChild(div);
    ReactDom.render(
        <Tips text={text} type={type}>
        </Tips>,
        div
    );
}

export default {
    info: function(text,duration){
        notice(text,duration,'info');
    },
    success: function(text,duration){
        notice(text,duration,'success');
    },
    error: function(text,duration){
        notice(text,duration,'error');
    },
    warning: function(text,duration){
        notice(text,duration,'warning');
    },
    loading: function(text,duration){
        notice(text,duration,'loading');
    }
};