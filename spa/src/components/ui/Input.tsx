import React from 'react';

interface IProps {
    onChange?: Function
}

interface IState {
    inputValue: string
}

export default class Input extends React.Component<IProps, IState>{
    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);

        this.state = {inputValue: ''};
        this.inputRef = React.createRef<HTMLInputElement>();
    }

    _onChange = () => {
        const { onChange } = this.props;
        const value = this.inputRef.current && this.inputRef.current.value;

        this.setState({inputValue: value || ''});

        onChange && onChange(value);
    }

    render() {
        return (
            <input ref={this.inputRef} onChange={this._onChange}></input>
        )
    }
}