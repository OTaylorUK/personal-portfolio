import { useRouter } from 'next/router'
import { useEffect } from 'react'


function useAnalyticsInstance() {
  const router = useRouter()
  useEffect(() => {
    const onRouteChangeComplete = () => {
      if (window.goatcounter === undefined) return
      window.goatcounter.count({
        path: location.pathname + location.search + location.hash,
      })
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])
}



interface ThemeToggleProps {
	className: string
}

const useAnalyticsEvent = () => {

  function trackCustomEvent(eventName: string,eventTitle: string, ): void{

    if (typeof window?.goatcounter === undefined) return
    window.goatcounter.count({
      path: eventName,
      title: eventTitle || eventName,
      event: true,
    })
  }

  return { trackCustomEvent }
}

export { useAnalyticsInstance, useAnalyticsEvent }