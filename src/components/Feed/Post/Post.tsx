import { Avatar } from '@mui/material';
import './Post.scss'
import { InputOption } from '../InputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { forwardRef } from 'react';

type Props = {
  name: string,
  description?: string,
  photoUrl?: string,
  message?: string
}

type RefType = HTMLDivElement;

export const Post: React.FC<Props> = forwardRef<RefType, Props>(({ name, description, photoUrl, message }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>

          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        {message}
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
        <InputOption Icon={ChatBubbleOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Repost' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  )
})
