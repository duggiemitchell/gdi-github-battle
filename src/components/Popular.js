import React from "react";

function SelectedLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            onClick={() => {
              props.onSelect(lang);
            }}
            key={lang}
            style={
              lang === props.selectedLanguage ? { color: `#d0021b` } : null
            }
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedLanguage: "All" };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang });
  }
  render() {
    return (
      <div>
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

export default Popular;
