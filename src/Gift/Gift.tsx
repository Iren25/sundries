import React from 'react';

export default function Gift(): JSX.Element {
  return (
    <>
    <div>Gift</div>
    <img src="data:image/jpeg;base64,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" alt="gift" />
    </>
  );
}
