import React from 'react';
import { connect } from 'react-redux'; 
import Cropper from 'react-cropper';
import '../../../../../node_modules/cropperjs/dist/cropper.css';
import styles from './styles.css';
//import * as actions from '../actions';

class ImageInputDialog extends React.Component {
    constructor(props) {
        super(props);
    };

    render = () => {
        const { 
            imageType, 
            temp, 
            handleCancel, 
            handleSubmit, 
            memberId 
        } = this.props;
        const uploadStatus = temp.get('uploadStatus');
        let aspectRatio = null;

        switch (imageType) {
            case 'logo':
            case 'profile':
                aspectRatio = 1;
                break;
            case 'cover':
                aspectRatio = 21 / 9;
                break;
            case 'other':
                aspectRatio = null;
                break;
        }

        return (
            <div> 
                {uploadStatus !== 'finished' ?
                    <div className='loading'>
			            Working... Please wait
                    </div>
                :
                <div>
                    <Cropper
                        ref='cropper'
                        src={temp.get('link')}
                        style={{height: 500, width: '100%', overflow: 'hidden'}}
                       
                        aspectRatio={aspectRatio}
                        guides={false} />

                    <button
disabled={uploadStatus !== 'finished'}
                        onClick={this.handleCancel}>
                        Cancel
                    </button>

                    <button
                        onClick={() => handleSubmit(
                            this.refs.cropper.getData(true),    
                            memberId
                        )} 
                    >
                        Crop
                    </button>
                    </div>
                }
            </div>
        );
    }
}

ImageInputDialog.propTypes = {
    ImageType: React.PropTypes.string,
    temp: React.PropTypes.object,
    handleSubmit: React.PropTypes.func,
    handleCancel: React.PropTypes.func,
};

const mapStateToProps = state => ({
    temp: state => state.get('temp'),
});

const mapDispatchToProps = dispatch => ({
    handleSubmit: data => dispatch(actions.cropImage(              
        actions.setMemberProfileImage,            
        this.props.temp.get('key'),
        data,
    )),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(ImageInputDialog);