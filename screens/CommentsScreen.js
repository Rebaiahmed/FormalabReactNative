import React, { Component, PropTypes } from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import Comment from '../components/CommentComponent';
import Input from '../components/InputText';

export default class CommentsScreen extends Component {



  state = {
    comments: [{ 'id' :0 , 'user': { 'name' :'mouhamed'} , created :new Date() , content :'salut'}], // array for comments fetched from the API backend
    refreshing: true, // whether comments list is being refreshed or not
  };

  // Fetch comments when component is about to mount
  componentWillMount = () => //this.fetchComments();

  // Re-fetch comments when user pulls the list down
  onRefresh = () => this.fetchComments();

  // Call API to fetch comments
  fetchComments = async () => {
    this.setState({ refreshing: true });
    try {
      // Make API call
      const response = await get('comments');
      // Convert response to JSON
      const json = await response.json();
      
      this.setState({
        refreshing: false,
        comments: json.comments
      });
    }
    catch (error) {
      alert(error);
    }
  };

  // Call API to submit a new comment
  submitComment = async (comment) => {
    const { user } = this.props;
    this._scrollView.scrollTo({ y: 0 });

    console.log('comemnt'+JSON.stringify(comment));
    let newcomment ={
      id :11,
      user :{
        name :'Mouhamed'
      },
      content : comment
    }

    this.setState({
      // Push new comment to state before existing ones
      comments: [newcomment, ...this.state.comments]
    });
  };

  render() {
    // Pull comments out of state
    const { comments } = this.state;
    return (
      <View style={styles.container}>
        {/* Scrollable list */}
        <ScrollView
          ref={(scrollView) => { this._scrollView = scrollView; }}
         
        >
          {/* Render each comment with Comment component */}
          {comments.map((comment, index) => <Comment comment={comment} key={index} />)}
        </ScrollView>
        {/* Comment input box */}
        <Input onSubmit={this.submitComment} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20,
  }
});