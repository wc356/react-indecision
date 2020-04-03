class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

/* const app = {
  isHidden: false,
  button: "Hide details"
};

const onClick = () => {
  if (app.isHidden === false) {
    app.isHidden = true;
    app.button = "Show details";
  } else {
    app.isHidden = false;
    app.button = "Hide details";
  }
  render();
};

const render = () => {
  const challenge = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onClick}>{app.button}</button>
      {app.isHidden === false ? (
        <p>Hey. These are some details you can now see!</p>
      ) : (
        undefined
      )}
    </div>
  );

  ReactDOM.render(challenge, document.getElementById("app"));
};

render();
*/
