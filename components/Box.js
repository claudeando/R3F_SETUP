import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = () => {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.x += 0.01
        ref.current.rotation.y += 0.01
        ref.current.rotation.z += 0.01
    })
    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshStandardMaterial />s
        </mesh>
    )
}

export default Box;