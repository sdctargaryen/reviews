import React from 'react';
import review from '../css/review.css'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long: false,
      expanded: false,
      text1: '',
    }
    this.expandText = this.expandText.bind(this);
  }

  componentDidMount() {
    const { text } = this.props.review;
    if (text.length > 270 && text.substring(270).indexOf(' ') !== -1) {
      let space = 270 + text.substring(270).indexOf(' ');
      let text1 = text.substring(0, space);
      this.setState({ text1, long: true })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.review !== prevProps.review) {
      this.setState({
        long: false,
        expanded: false,
        text1: '',
      }, this.componentDidMount);
    }
  }

  expandText() {
    this.setState( { expanded: true } );
  }

  render() {
  const { user, date, text, userImage } = this.props.review;
  const { long, expanded, text1 } = this.state;

    return (
      <div className={review.review}>
        <div className={review.postDetail}>
          <img src={userImage} className={review.profilePic} />
          <div className={review.userInfo}>
            <div className={review.user}>
              {user}
            </div>
            <div >
              {date}
            </div>
          </div>
        </div>
        {long ? (expanded ?
          <div className={review.text}>
            {text}
          </div> :
          <div className={review.text}>
            {text1 + '...'}
            <button 
              type='button' 
              className={review.readMore} 
              onClick={this.expandText}>
              Read More
            </button>
          </div>) :
          <div className={review.text}>
            {text}
          </div>}
          <div className={review.border}>
            <div className={review.borderLine}/>
          </div>
      </div>
    )
  }
}

export default Review;