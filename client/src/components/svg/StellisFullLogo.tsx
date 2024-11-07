
type IconPropsType = {
  isDark?: Boolean;
  className?: string;
  onClick?: () => void;
}

const StellisFullLogo = ({  isDark, className, onClick }: IconPropsType) => {

  return (
    <span className={`flex items-center justify-center ${className}`} onClick={onClick}>
       <svg width="262" height="32" viewBox="0 0 262 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M79.2555 22.611C79.1295 22.821 78.9895 22.982 78.8355 23.094C78.6955 23.192 78.5205 23.241 78.3105 23.241C78.0725 23.241 77.7925 23.122 77.4705 22.884C77.1485 22.646 76.7425 22.387 76.2525 22.107C75.7765 21.813 75.1955 21.547 74.5095 21.309C73.8375 21.071 73.0185 20.952 72.0525 20.952C71.1425 20.952 70.3375 21.078 69.6375 21.33C68.9515 21.568 68.3705 21.897 67.8945 22.317C67.4325 22.737 67.0825 23.234 66.8445 23.808C66.6065 24.368 66.4875 24.977 66.4875 25.635C66.4875 26.475 66.6905 27.175 67.0965 27.735C67.5165 28.281 68.0625 28.75 68.7345 29.142C69.4205 29.534 70.1905 29.877 71.0445 30.171C71.9125 30.451 72.7945 30.745 73.6905 31.053C74.6005 31.361 75.4825 31.711 76.3365 32.103C77.2045 32.481 77.9745 32.964 78.6465 33.552C79.3325 34.14 79.8785 34.861 80.2845 35.715C80.7045 36.569 80.9145 37.619 80.9145 38.865C80.9145 40.181 80.6905 41.42 80.2425 42.582C79.7945 43.73 79.1365 44.731 78.2685 45.585C77.4145 46.439 76.3575 47.111 75.0975 47.601C73.8515 48.091 72.4305 48.336 70.8345 48.336C68.8745 48.336 67.0965 47.986 65.5005 47.286C63.9045 46.572 62.5395 45.613 61.4055 44.409L62.5815 42.477C62.6935 42.323 62.8265 42.197 62.9805 42.099C63.1485 41.987 63.3305 41.931 63.5265 41.931C63.7085 41.931 63.9115 42.008 64.1355 42.162C64.3735 42.302 64.6395 42.484 64.9335 42.708C65.2275 42.932 65.5635 43.177 65.9415 43.443C66.3195 43.709 66.7465 43.954 67.2225 44.178C67.7125 44.402 68.2655 44.591 68.8815 44.745C69.4975 44.885 70.1905 44.955 70.9605 44.955C71.9265 44.955 72.7875 44.822 73.5435 44.556C74.2995 44.29 74.9365 43.919 75.4545 43.443C75.9865 42.953 76.3925 42.372 76.6725 41.7C76.9525 41.028 77.0925 40.279 77.0925 39.453C77.0925 38.543 76.8825 37.801 76.4625 37.227C76.0565 36.639 75.5175 36.149 74.8455 35.757C74.1735 35.365 73.4035 35.036 72.5355 34.77C71.6675 34.49 70.7855 34.21 69.8895 33.93C68.9935 33.636 68.1115 33.3 67.2435 32.922C66.3755 32.544 65.6055 32.054 64.9335 31.452C64.2615 30.85 63.7155 30.101 63.2955 29.205C62.8895 28.295 62.6865 27.175 62.6865 25.845C62.6865 24.781 62.8895 23.752 63.2955 22.758C63.7155 21.764 64.3175 20.882 65.1015 20.112C65.8995 19.342 66.8725 18.726 68.0205 18.264C69.1825 17.802 70.5125 17.571 72.0105 17.571C73.6905 17.571 75.2165 17.837 76.5885 18.369C77.9745 18.901 79.1925 19.671 80.2425 20.679L79.2555 22.611ZM91.3729 48.336C89.6929 48.336 88.3979 47.867 87.4879 46.929C86.5919 45.991 86.1439 44.64 86.1439 42.876V29.856H83.5819C83.3579 29.856 83.1689 29.793 83.0149 29.667C82.8609 29.527 82.7839 29.317 82.7839 29.037V27.546L86.2699 27.105L87.1309 20.532C87.1729 20.322 87.2639 20.154 87.4039 20.028C87.5579 19.888 87.7539 19.818 87.9919 19.818H89.8819V27.147H96.0349V29.856H89.8819V42.624C89.8819 43.52 90.0989 44.185 90.5329 44.619C90.9669 45.053 91.5269 45.27 92.2129 45.27C92.6049 45.27 92.9409 45.221 93.2209 45.123C93.5149 45.011 93.7669 44.892 93.9769 44.766C94.1869 44.64 94.3619 44.528 94.5019 44.43C94.6559 44.318 94.7889 44.262 94.9009 44.262C95.0969 44.262 95.2719 44.381 95.4259 44.619L96.5179 46.404C95.8739 47.006 95.0969 47.482 94.1869 47.832C93.2769 48.168 92.3389 48.336 91.3729 48.336ZM114.01 35.043C114.01 34.175 113.884 33.384 113.632 32.67C113.394 31.942 113.037 31.319 112.561 30.801C112.099 30.269 111.532 29.863 110.86 29.583C110.188 29.289 109.425 29.142 108.571 29.142C106.779 29.142 105.358 29.667 104.308 30.717C103.272 31.753 102.628 33.195 102.376 35.043H114.01ZM117.034 45.018C116.572 45.578 116.019 46.068 115.375 46.488C114.731 46.894 114.038 47.23 113.296 47.496C112.568 47.762 111.812 47.958 111.028 48.084C110.244 48.224 109.467 48.294 108.697 48.294C107.227 48.294 105.869 48.049 104.623 47.559C103.391 47.055 102.32 46.327 101.41 45.375C100.514 44.409 99.8135 43.219 99.3095 41.805C98.8055 40.391 98.5535 38.767 98.5535 36.933C98.5535 35.449 98.7775 34.063 99.2255 32.775C99.6875 31.487 100.346 30.374 101.2 29.436C102.054 28.484 103.097 27.742 104.329 27.21C105.561 26.664 106.947 26.391 108.487 26.391C109.761 26.391 110.937 26.608 112.015 27.042C113.107 27.462 114.045 28.078 114.829 28.89C115.627 29.688 116.25 30.682 116.698 31.872C117.146 33.048 117.37 34.392 117.37 35.904C117.37 36.492 117.307 36.884 117.181 37.08C117.055 37.276 116.817 37.374 116.467 37.374H102.25C102.292 38.718 102.474 39.887 102.796 40.881C103.132 41.875 103.594 42.708 104.182 43.38C104.77 44.038 105.47 44.535 106.282 44.871C107.094 45.193 108.004 45.354 109.012 45.354C109.95 45.354 110.755 45.249 111.427 45.039C112.113 44.815 112.701 44.577 113.191 44.325C113.681 44.073 114.087 43.842 114.409 43.632C114.745 43.408 115.032 43.296 115.27 43.296C115.578 43.296 115.816 43.415 115.984 43.653L117.034 45.018ZM125.825 17.067V48H122.087V17.067H125.825ZM135.751 17.067V48H132.013V17.067H135.751ZM145.761 26.727V48H142.023V26.727H145.761ZM146.559 20.049C146.559 20.413 146.482 20.756 146.328 21.078C146.188 21.386 145.992 21.666 145.74 21.918C145.502 22.156 145.215 22.345 144.879 22.485C144.557 22.625 144.214 22.695 143.85 22.695C143.486 22.695 143.143 22.625 142.821 22.485C142.513 22.345 142.24 22.156 142.002 21.918C141.764 21.666 141.575 21.386 141.435 21.078C141.295 20.756 141.225 20.413 141.225 20.049C141.225 19.685 141.295 19.342 141.435 19.02C141.575 18.684 141.764 18.397 142.002 18.159C142.24 17.907 142.513 17.711 142.821 17.571C143.143 17.431 143.486 17.361 143.85 17.361C144.214 17.361 144.557 17.431 144.879 17.571C145.215 17.711 145.502 17.907 145.74 18.159C145.992 18.397 146.188 18.684 146.328 19.02C146.482 19.342 146.559 19.685 146.559 20.049ZM164.292 30.234C164.124 30.542 163.865 30.696 163.515 30.696C163.305 30.696 163.067 30.619 162.801 30.465C162.535 30.311 162.206 30.143 161.814 29.961C161.436 29.765 160.981 29.59 160.449 29.436C159.917 29.268 159.287 29.184 158.559 29.184C157.929 29.184 157.362 29.268 156.858 29.436C156.354 29.59 155.92 29.807 155.556 30.087C155.206 30.367 154.933 30.696 154.737 31.074C154.555 31.438 154.464 31.837 154.464 32.271C154.464 32.817 154.618 33.272 154.926 33.636C155.248 34 155.668 34.315 156.186 34.581C156.704 34.847 157.292 35.085 157.95 35.295C158.608 35.491 159.28 35.708 159.966 35.946C160.666 36.17 161.345 36.422 162.003 36.702C162.661 36.982 163.249 37.332 163.767 37.752C164.285 38.172 164.698 38.69 165.006 39.306C165.328 39.908 165.489 40.636 165.489 41.49C165.489 42.47 165.314 43.38 164.964 44.22C164.614 45.046 164.096 45.767 163.41 46.383C162.724 46.985 161.884 47.461 160.89 47.811C159.896 48.161 158.748 48.336 157.446 48.336C155.962 48.336 154.618 48.098 153.414 47.622C152.21 47.132 151.188 46.509 150.348 45.753L151.23 44.325C151.342 44.143 151.475 44.003 151.629 43.905C151.783 43.807 151.979 43.758 152.217 43.758C152.469 43.758 152.735 43.856 153.015 44.052C153.295 44.248 153.631 44.465 154.023 44.703C154.429 44.941 154.919 45.158 155.493 45.354C156.067 45.55 156.781 45.648 157.635 45.648C158.363 45.648 159 45.557 159.546 45.375C160.092 45.179 160.547 44.92 160.911 44.598C161.275 44.276 161.541 43.905 161.709 43.485C161.891 43.065 161.982 42.617 161.982 42.141C161.982 41.553 161.821 41.07 161.499 40.692C161.191 40.3 160.778 39.971 160.26 39.705C159.742 39.425 159.147 39.187 158.475 38.991C157.817 38.781 157.138 38.564 156.438 38.34C155.752 38.116 155.073 37.864 154.401 37.584C153.743 37.29 153.155 36.926 152.637 36.492C152.119 36.058 151.699 35.526 151.377 34.896C151.069 34.252 150.915 33.475 150.915 32.565C150.915 31.753 151.083 30.976 151.419 30.234C151.755 29.478 152.245 28.82 152.889 28.26C153.533 27.686 154.324 27.231 155.262 26.895C156.2 26.559 157.271 26.391 158.475 26.391C159.875 26.391 161.128 26.615 162.234 27.063C163.354 27.497 164.32 28.099 165.132 28.869L164.292 30.234ZM198.773 44.577V48H181.7V17.907H185.753V44.577H198.773ZM213.922 38.424C212.2 38.48 210.73 38.62 209.512 38.844C208.308 39.054 207.321 39.334 206.551 39.684C205.795 40.034 205.242 40.447 204.892 40.923C204.556 41.399 204.388 41.931 204.388 42.519C204.388 43.079 204.479 43.562 204.661 43.968C204.843 44.374 205.088 44.71 205.396 44.976C205.718 45.228 206.089 45.417 206.509 45.543C206.943 45.655 207.405 45.711 207.895 45.711C208.553 45.711 209.155 45.648 209.701 45.522C210.247 45.382 210.758 45.186 211.234 44.934C211.724 44.682 212.186 44.381 212.62 44.031C213.068 43.681 213.502 43.282 213.922 42.834V38.424ZM201.847 29.73C203.023 28.596 204.29 27.749 205.648 27.189C207.006 26.629 208.511 26.349 210.163 26.349C211.353 26.349 212.41 26.545 213.334 26.937C214.258 27.329 215.035 27.875 215.665 28.575C216.295 29.275 216.771 30.122 217.093 31.116C217.415 32.11 217.576 33.202 217.576 34.392V48H215.917C215.553 48 215.273 47.944 215.077 47.832C214.881 47.706 214.727 47.468 214.615 47.118L214.195 45.102C213.635 45.62 213.089 46.082 212.557 46.488C212.025 46.88 211.465 47.216 210.877 47.496C210.289 47.762 209.659 47.965 208.987 48.105C208.329 48.259 207.594 48.336 206.782 48.336C205.956 48.336 205.179 48.224 204.451 48C203.723 47.762 203.086 47.412 202.54 46.95C202.008 46.488 201.581 45.907 201.259 45.207C200.951 44.493 200.797 43.653 200.797 42.687C200.797 41.847 201.028 41.042 201.49 40.272C201.952 39.488 202.701 38.795 203.737 38.193C204.773 37.591 206.124 37.101 207.79 36.723C209.456 36.331 211.5 36.107 213.922 36.051V34.392C213.922 32.74 213.565 31.494 212.851 30.654C212.137 29.8 211.094 29.373 209.722 29.373C208.798 29.373 208.021 29.492 207.391 29.73C206.775 29.954 206.236 30.213 205.774 30.507C205.326 30.787 204.934 31.046 204.598 31.284C204.276 31.508 203.954 31.62 203.632 31.62C203.38 31.62 203.163 31.557 202.981 31.431C202.799 31.291 202.645 31.123 202.519 30.927L201.847 29.73ZM227.029 42.876C227.715 43.8 228.464 44.451 229.276 44.829C230.102 45.207 231.005 45.396 231.985 45.396C233.987 45.396 235.52 44.689 236.584 43.275C237.648 41.861 238.18 39.754 238.18 36.954C238.18 34.35 237.704 32.439 236.752 31.221C235.814 29.989 234.47 29.373 232.72 29.373C231.502 29.373 230.438 29.653 229.528 30.213C228.632 30.773 227.799 31.564 227.029 32.586V42.876ZM227.029 29.793C227.925 28.757 228.933 27.931 230.053 27.315C231.187 26.699 232.489 26.391 233.959 26.391C235.205 26.391 236.325 26.629 237.319 27.105C238.327 27.581 239.181 28.274 239.881 29.184C240.581 30.08 241.113 31.172 241.477 32.46C241.855 33.748 242.044 35.197 242.044 36.807C242.044 38.529 241.834 40.097 241.414 41.511C240.994 42.925 240.385 44.136 239.587 45.144C238.803 46.138 237.844 46.915 236.71 47.475C235.576 48.021 234.302 48.294 232.888 48.294C231.488 48.294 230.305 48.035 229.339 47.517C228.387 46.985 227.554 46.236 226.84 45.27L226.651 47.202C226.539 47.734 226.217 48 225.685 48H223.27V17.067H227.029V29.793ZM259.162 30.234C258.994 30.542 258.735 30.696 258.385 30.696C258.175 30.696 257.937 30.619 257.671 30.465C257.405 30.311 257.076 30.143 256.684 29.961C256.306 29.765 255.851 29.59 255.319 29.436C254.787 29.268 254.157 29.184 253.429 29.184C252.799 29.184 252.232 29.268 251.728 29.436C251.224 29.59 250.79 29.807 250.426 30.087C250.076 30.367 249.803 30.696 249.607 31.074C249.425 31.438 249.334 31.837 249.334 32.271C249.334 32.817 249.488 33.272 249.796 33.636C250.118 34 250.538 34.315 251.056 34.581C251.574 34.847 252.162 35.085 252.82 35.295C253.478 35.491 254.15 35.708 254.836 35.946C255.536 36.17 256.215 36.422 256.873 36.702C257.531 36.982 258.119 37.332 258.637 37.752C259.155 38.172 259.568 38.69 259.876 39.306C260.198 39.908 260.359 40.636 260.359 41.49C260.359 42.47 260.184 43.38 259.834 44.22C259.484 45.046 258.966 45.767 258.28 46.383C257.594 46.985 256.754 47.461 255.76 47.811C254.766 48.161 253.618 48.336 252.316 48.336C250.832 48.336 249.488 48.098 248.284 47.622C247.08 47.132 246.058 46.509 245.218 45.753L246.1 44.325C246.212 44.143 246.345 44.003 246.499 43.905C246.653 43.807 246.849 43.758 247.087 43.758C247.339 43.758 247.605 43.856 247.885 44.052C248.165 44.248 248.501 44.465 248.893 44.703C249.299 44.941 249.789 45.158 250.363 45.354C250.937 45.55 251.651 45.648 252.505 45.648C253.233 45.648 253.87 45.557 254.416 45.375C254.962 45.179 255.417 44.92 255.781 44.598C256.145 44.276 256.411 43.905 256.579 43.485C256.761 43.065 256.852 42.617 256.852 42.141C256.852 41.553 256.691 41.07 256.369 40.692C256.061 40.3 255.648 39.971 255.13 39.705C254.612 39.425 254.017 39.187 253.345 38.991C252.687 38.781 252.008 38.564 251.308 38.34C250.622 38.116 249.943 37.864 249.271 37.584C248.613 37.29 248.025 36.926 247.507 36.492C246.989 36.058 246.569 35.526 246.247 34.896C245.939 34.252 245.785 33.475 245.785 32.565C245.785 31.753 245.953 30.976 246.289 30.234C246.625 29.478 247.115 28.82 247.759 28.26C248.403 27.686 249.194 27.231 250.132 26.895C251.07 26.559 252.141 26.391 253.345 26.391C254.745 26.391 255.998 26.615 257.104 27.063C258.224 27.497 259.19 28.099 260.002 28.869L259.162 30.234Z" fill={isDark ? "white" : "black"}/>
            <path d="M26.1863 8.03702C23.9152 8.39427 21.8802 9.6574 20.6298 11.4883C20.1513 12.19 17.153 17.5743 16.9871 18.0272C16.5916 19.1373 16.5406 20.5471 16.8659 21.6444C17.287 23.0478 18.1609 24.2663 19.3156 25.0319C19.8451 25.3827 20.2981 25.5869 21.0445 25.8229L21.5931 25.9888L24.4319 25.9952C25.9949 25.9952 30.0331 25.9696 33.4078 25.9441L39.5448 25.8931L39.851 26.027C40.253 26.2057 40.3678 26.3141 40.5464 26.6969L40.6995 27.0159V31.1115V35.2007L41.1014 35.1114C42.6771 34.7541 44.0232 33.995 45.1524 32.8275C46.307 31.6346 47.0088 30.2566 47.3022 28.6235C47.4553 27.7686 47.4107 26.11 47.2129 25.3572C46.6643 23.2775 45.4969 21.6444 43.7425 20.4961C42.6835 19.7943 41.5033 19.3605 40.2211 19.2074C39.8128 19.1564 37.7012 19.1564 32.6933 19.2074C28.872 19.2393 25.3314 19.2648 24.8402 19.2521L23.9407 19.2329L25.1018 17.1915C26.0651 15.501 26.3011 15.1182 26.5116 14.9779C26.7987 14.7737 27.2772 14.6653 27.5898 14.7354C27.711 14.761 29.3888 15.6796 31.3217 16.7769C33.4844 18.0017 34.8623 18.7481 34.9006 18.7098C35.0091 18.6014 35.277 17.4084 35.3408 16.7386C35.4492 15.5648 35.2387 14.1485 34.7794 12.9938C33.8416 10.659 31.7747 8.85359 29.2995 8.22203C28.6551 8.05616 28.4063 8.02427 27.5579 8.00513C27.0156 7.99237 26.3968 8.00513 26.1863 8.03702Z" fill="#3b82f6"/>
            <path d="M10.7486 12.7641C7.21437 13.2489 4.54138 15.7433 3.8205 19.2201C3.50153 20.7639 3.69929 22.5756 4.35 24.0812C4.45845 24.3236 6.32124 27.5389 8.49025 31.2262C10.6593 34.9071 12.4519 37.9756 12.471 38.033C12.5157 38.1415 12.3753 38.1479 10.1361 38.1479C7.85231 38.1479 7.75024 38.1415 7.4823 38.0139C7.15695 37.8544 6.86988 37.5291 6.7678 37.1973C6.72315 37.0315 6.69763 36.1702 6.69763 34.5626C6.69763 33.2485 6.67849 31.4367 6.65297 30.5372C6.6147 29.0444 6.60194 28.8977 6.50625 28.8977C6.23831 28.8977 5.20484 29.2485 4.56052 29.5611C3.74395 29.9567 3.11238 30.3905 2.48082 30.9838C1.28786 32.1129 0.381984 33.7971 0.0949088 35.4302C-0.03268 36.1702 -0.03268 37.5291 0.101288 38.218C0.777509 41.8033 3.65464 44.4635 7.27178 44.8527C7.763 44.9101 8.86664 44.9101 11.4184 44.8654C14.404 44.808 14.9526 44.7825 15.3099 44.6868C17.1089 44.1956 18.4868 43.0473 19.2715 41.3759C19.6415 40.5784 19.7819 40.017 19.8201 39.1048C19.8584 38.1479 19.7244 37.3632 19.38 36.5658C19.2587 36.2851 18.3848 34.7412 17.4342 33.1336C16.4837 31.526 14.5699 28.2661 13.1728 25.8993C11.7757 23.5326 10.5827 21.4784 10.5189 21.338C10.2829 20.8213 10.4232 20.1834 10.8506 19.807C10.9719 19.6985 12.6114 18.7288 14.4997 17.638C16.3816 16.5535 17.9254 15.6476 17.9254 15.6221C17.9254 15.5391 16.8473 14.5248 16.4454 14.2313C15.9287 13.8613 15.0675 13.4084 14.4295 13.1787C13.3769 12.8023 11.7693 12.6237 10.7486 12.7641Z" fill="#3b82f6"/>
            <path d="M33.5095 31.1559C32.2145 31.4047 31.2257 31.9214 30.3262 32.8145C29.7265 33.4206 29.6117 33.5992 27.8318 36.7443C26.9897 38.2371 25.5544 40.7633 24.6549 42.3582C23.749 43.953 22.5816 46.02 22.0584 46.9514C21.5289 47.8828 21.0122 48.7376 20.9038 48.8461C20.6358 49.1331 20.2467 49.2735 19.8193 49.2352C19.4492 49.2033 19.5832 49.2799 14.5435 46.3581C13.0251 45.4777 12.3936 45.146 12.3617 45.197C12.3362 45.2417 12.2405 45.5479 12.1512 45.8733C11.4111 48.6547 12.2022 51.5829 14.25 53.6243C15.73 55.1043 17.5099 55.889 19.5832 55.991C22.2052 56.1186 24.8335 54.8746 26.4284 52.7503C26.7154 52.3675 29.6882 47.1747 33.8668 39.7618C34.2304 39.1174 34.5494 38.6071 34.5749 38.6262C34.6004 38.6453 35.149 39.5512 35.7934 40.6421C36.8396 42.4284 36.9608 42.6644 36.9863 42.977C37.0246 43.4108 36.8715 43.8191 36.5908 44.0615C36.476 44.1572 34.8428 45.146 32.9609 46.2496C31.079 47.3533 29.5351 48.2847 29.5351 48.323C29.5351 48.3549 29.7776 48.6228 30.0774 48.9099C31.264 50.0518 32.7695 50.7982 34.4154 51.0725C35.3277 51.2192 36.7439 51.1682 37.5796 50.9513C39.2 50.5302 40.4185 49.8094 41.5604 48.5973C43.4104 46.626 44.1441 43.8318 43.5061 41.1716C43.2318 40.0169 43.1552 39.8574 41.0245 36.2658C39.4552 33.612 39.2893 33.3632 38.8172 32.8783C37.9943 32.0426 37.1331 31.5387 36.0422 31.258C35.3468 31.0857 34.1539 31.0347 33.5095 31.1559Z" fill="#3b82f6"/>
        </svg>
    </span>
  );
};

export default StellisFullLogo;