import './InputOption.scss'

type Props = {
  title?: string,
  Icon: React.ComponentType<any>,
  color?: string
}

export const InputOption: React.FC<Props> = ({ title, Icon, color }) => {
  return (
    <div className='inputOption'>
      <Icon style={{ color: color }} />

      <h4 style={{color}}>{title}</h4>
    </div>
  )
};
