type Props = {
  buttonText: string
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const BaseButton: React.FC<Props> = (props) => {
  return (
    <button
      className="text-sm bg-white hover:bg-lighter text-main focus:outline-none font-bold py-2
        px-3 rounded"
      onClick={props.handleOnClick}
    >
      {props.buttonText}
    </button>
  )
}
