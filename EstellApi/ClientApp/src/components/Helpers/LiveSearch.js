import React from 'react';
import Preloader from '../Preloader';
import Input from './Input';
import '../../styles/AutoComplete.css';

export default class LiveSearch extends React.Component {
    state = {
        ...this.props,
        items: this.props.items,
        suggestions: [],
        text: '',
        closeBtnVisible: false,
        preloaderOn: false,
    }

      componentWillReceiveProps(nextProps){
        if(nextProps.items !== this.props.items){
            this.setState({items: nextProps.items})
            let suggestions = [];
            nextProps.items ? suggestions = nextProps.items.sort() : suggestions = [];
            this.setState(() => ({suggestions, preloaderOn: false}))
        }
    }

    onTextChange = (e) => {  
        let value = e.target.value;
        let suggestions = [];

        if (value.length > 0) {
            this.props.onChange(value);
            this.setState({
                closeBtnVisible: true,
                preloaderOn: false,   
            })
            
            this.setState(() => ({ suggestions, text: value, preloaderOn: true }))
        }
        else {
            this.setState({
                closeBtnVisible: false,
                preloaderOn: false,
                suggestions: [],
                text: ''
            })
        }

    }

    suggestionSelected (isin, text, issuerCode) {
        this.setState(() => ({
            text: isin,
            suggestions: [],
            closeBtnVisible: false,
            preloaderOn: false,
        }))
        
        this.props.setIsinAndIssuer(isin, text, issuerCode)
    }

    renderSuggestions () {
        const { suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul className='search-list' style={{width: this.props.width}}>
                {suggestions.map((item) => <li className='search-list-item' onClick={() => this.suggestionSelected(item.id)}>{item.name}</li>)}
            </ul>
        )
    }
    onCancel = () =>{
        this.setState({
            text: '',
            closeBtnVisible: false,
            suggestions: [],
            preloaderOn: false,
        })
    }
        /////////////// toggle onBlur ///////////////////////////////////////////////////////
        isinsRef = React.createRef();

        componentDidMount() {                                                       
            document.addEventListener('mousedown', (event)=>{
                
                if (this.isinsRef && !this.isinsRef.contains(event.target) ) {
                    this.setState({
                        suggestions: [],
                        preloaderOn: false,
                    })
                }
            });
        }

        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
        ///////////////////////////////////////////////////////////////////////////////////////

    render() {
        const { width, label, id, onChange, error, value,  click, ...attrs } = this.props
        const { text } = this.state;

        return (
            <div ref={elem => this.isinsRef = elem}>
                <div className="labelsWrapper">
                    {label
                        && <label className="selectLabel" htmlFor={id}>{label}</label>
                    }
                    {attrs.required
                        && <span className="selectRequired">Required</span>
                    }
                </div>

                <div>
                    {this.state.closeBtnVisible ? <div className="search-close-btn" style={{ left: `${+width - 30}px` }} onClick={this.onCancel}></div> : ''}          

                        <Input error={error} width={width} name={id} value={text} onChange={this.onTextChange}/>
                    {this.state.preloaderOn ? <div className="preloader-container" style={{ width: `${width}px` }}><Preloader size={4} className="autocomplete-preloader" /></div> : ""}
                </div>

                    {this.renderSuggestions()}

            </div>
        )
    }
}