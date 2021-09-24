import React, { PropsWithChildren, useState, MouseEvent } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";

//#CSS PART START
const MenuContainer = styled.div`
  ${tw`
       mr-2
       transition: duration-300 ease-in-out
       flex
       items-center
       content-center
  `}

  & svg {
    ${tw`
         text-lg
         text-red-400
         cursor-pointer
         transition: duration-300 ease-in-out
         hover:text-blue-200
    `}
  }
`;

const CollapsContainer = styled.div`
  ${tw`
       fixed
       top-14
       right-0
       bg-gray-800
       flex
       flex-col
       items-center
       transition-all: duration-300 ease-in-out
       
   `}
  transform:translateX(100%);
  &.opened {
    transform: translateX(0);
  }

  & svg {
    ${tw`
        absolute
        right-6
        top-3
    `}
  }

  & li {
    ${tw`
        w-60
        p-12
    `}
  }

  & a {
    ${tw`
        text-white
    `}
  }
`;

//#CSS PART END

function Menu({ children }: PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);

  function handleClickOutside(e: any) {
    console.log(e);
  }

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <MenuContainer>
      <CollapsContainer className={open ? "opened" : ""}>
        <IoMdClose onClick={onToggle} />
        {children}
      </CollapsContainer>

      <HiMenu onClick={onToggle} />
    </MenuContainer>
  );
}

export default Menu;
