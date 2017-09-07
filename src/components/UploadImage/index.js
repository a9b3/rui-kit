import styles       from './styles.scss'
import PropTypes    from 'prop-types'
import cx           from 'classnames'

import {SelectFile} from '~/components/Dropzone'
import Image        from '~/components/Image'

export default class UploadImageContainer extends React.Component {
  static propTypes = {
    // (file: File, (progress: number): void): Promise<void>
    uploadFile  : PropTypes.func.isRequired,
    defaultImage: PropTypes.string,
  }

  static defaultProps = {
    defaultImage: `https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png`,
  }

  state = {
    preview  : null,
    uploading: false,
    progress : 0,
    error    : null,
  }

  componentDidMount() {
    const {
      defaultImage,
    } = this.props
    this.setState({preview: defaultImage})
  }

  setProgress = (progress) => {
    this.setState({progress})
  }

  handleDrop = async (files) => {
    const {
      uploadFile,
    } = this.props
    const {
      uploading,
    } = this.state

    if (uploading) return

    this.setState({preview: files[0].preview, uploading: true})
    try {
      await uploadFile(files[0], this.setProgress)
    } catch (error) {
      this.setState({error})
    }
    this.setState({uploading: false})
  }

  render() {
    const {
      defaultImage, // eslint-disable-line
      uploadFile, // eslint-disable-line
      ...rest
    } = this.props
    const {
      preview,
      uploading,
      // TODO show error screen
      error, // eslint-disable-line
      progress,
    } = this.state

    if (uploading) {
      return <div
        {...rest}
        className={cx(styles.container, rest.className)}
      >
        <Image
          src={preview}
          style={{height: '100%', width: '100%'}}
        />

        <div className={cx(styles.upload__progress)}>
          {`${progress}% uploaded...`}
        </div>
      </div>
    }

    return <SelectFile
      onDrop={this.handleDrop}
    >
      <Image
        {...rest}
        className={cx(styles.container, rest.className)}
        src={preview}
      />
    </SelectFile>
  }
}
