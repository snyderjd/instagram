/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

export default function Suggestions({ userId }) {
  const [profiles, setProfiles] = useState(null);

  // go ahead and get the suggested profiles
  useEffect(() => {}, [userId]);

  // hint: use the firebase service (call using userId)
  // getSuggestedProfiles
  // call the async function ^^^^ within useEffect
  // store it in state
  // go ahead and render (wait on the profiles as in 'skeleton')

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string
};
