import React, {
  PropsWithChildren,
  useState,
  useRef,
  useEffect,
  MutableRefObject,
} from "react";
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
  let ref: MutableRefObject<any> = useRef();
  let burgerRef: MutableRefObject<any> = useRef();

  function handleClickOutside(e: any) {
    if (
      !ref.current.contains(e.target) &&
      !burgerRef.current.contains(e.target)
    ) {
      setOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onToggle = (e: any) => {
    setOpen((prev) => !prev);
    document.addEventListener("mousedown", handleClickOutside);
  };

  return (
    <MenuContainer>
      <div ref={burgerRef}>
        <HiMenu
          onClick={onToggle}
          fill={open ? "rgba(191, 219, 254, 1" : "rgba(248, 113, 113, 1"}
        />
      </div>

      <CollapsContainer
        className={`transform translate-x-${open ? "0" : "full"}`}
        ref={ref}
      >
        <IoMdClose onClick={onToggle} />
        {children}
      </CollapsContainer>
    </MenuContainer>
  );
}

export default Menu;
