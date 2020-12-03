class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowDetails = this.handleShowDetails.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleShowDetails() {
        console.log('handling')
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visible</h1>
                <button onClick={this.handleShowDetails}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Hey, some details you can see!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
ReactDOM.render(<Visible />, document.getElementById('app'));