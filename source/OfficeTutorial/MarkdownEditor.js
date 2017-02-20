/**
 * Created by DK on 2017/2/20.
 */
import Reac, { Component } from 'react';

class MarkdownEditor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: 'Type some *markdown* here '};
    }

    handleChange() {
        this.setState({value: this.refs.textarea.value});
    }

    getRawMarkup() {
        var md = new Remarkable();
        return { __html: md.render(this.state.value)};
    }

    render() {
        return (
            <did className="MarkdownEditor">
                <h3>Input</h3>
                <textarea
                    onChange={this.handleChange}
                    ref="textarea"
                    defaultValue={this.state.value}
                    name="markdown"
                    id="markdown"
                    cols="30"
                    rows="10" ></textarea>
                <h3>Output</h3>
                <div className="content"
                     dangerouslySetInnerHTML = {this.getRawMarkup()}   />
            </did>
        );
    }
}

export default MarkdownEditor;
