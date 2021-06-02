export type BaseButtonProps = {
  buttonText: string
  buttonColor: 'main' | 'white'
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const backgroundColor = props.buttonColor === 'main' ? 'bg-main' : 'bg-white'
  const hoverdBackgroundColor = props.buttonColor === 'main' ? 'hover:bg-light' : 'hover:bg-lighter'
  const textColor = props.buttonColor === 'main' ? 'text-white' : 'text-main'

  return (
    <button
      className={`${backgroundColor} ${textColor} ${hoverdBackgroundColor} text-sm
        focus:outline-none font-bold py-2 px-3 rounded`}
      onClick={props.handleClick}
    >
      {props.buttonText}
    </button>
  )
}
