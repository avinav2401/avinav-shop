import React, { useEffect, useRef, useState } from 'react'

const LazyLoad = ({ children, threshold = 0.1, minHeight = "300px" }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.unobserve(entry.target)
            }
        }, {
            threshold: threshold,
            rootMargin: "100px" // Load slightly before it comes into view
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [threshold])

    return (
        <div ref={ref} style={{ minHeight: isVisible ? "auto" : minHeight }}>
            {isVisible ? children : null}
        </div>
    )
}

export default LazyLoad
