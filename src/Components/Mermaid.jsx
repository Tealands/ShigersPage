import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

let initialized = false;
let idCounter = 0;

const initMermaid = () => {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'strict',
    fontFamily: 'inherit',
  });
  initialized = true;
};

const Mermaid = ({ chart }) => {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const idRef = useRef(`mermaid-${(idCounter += 1)}`);

  useEffect(() => {
    let cancelled = false;
    initMermaid();

    mermaid
      .render(idRef.current, chart)
      .then(({ svg }) => {
        if (!cancelled) {
          setSvg(svg);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err?.message || String(err));
          setSvg('');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre className="text-red-400 text-sm whitespace-pre-wrap">
        Mermaid error: {error}
      </pre>
    );
  }

  return (
    <div
      className="flex justify-center my-6"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default Mermaid;
