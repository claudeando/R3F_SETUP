
const Base = () => {
    return (
        <mesh position={[0, -1.25, 0]}>
            <cylinderGeometry args={[1, 2.5, .1, 100]} />
            <meshStandardMaterial />
        </mesh>
    )
}

export default Base;