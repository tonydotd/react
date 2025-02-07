import Section from "./Section"

function Tabs({ className, children, buttons, ButtonContainer = "menu" }) {
  return (
    <>
      <ButtonContainer className={className}>
        {buttons}
      </ButtonContainer>
      {children}
    </>
  )
}

export default Tabs