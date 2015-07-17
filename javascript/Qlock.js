// react components
var Qlock  = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.time.map(function(item, index) {
                    return <QlockRow cells={item} key={index} />;
                })}
                <QlockRow cells={minAndSec} />
            </div>
        );
    }
});

var QlockRow = React.createClass({
    render: function() {
        return (
        <div className="row">
            {this.props.cells.map(function(item, index) {
                return <QlockCell char={item.char} active={item.active} key={index} />;
            })}
        </div>

        );
    }
});

var QlockCell = React.createClass({
    render: function() {
        return (
            <div className={classNames({'qlock-letter': true, 'qlock-active': this.props.active})}>{this.props.char}</div>
        );
    }
});

var time = [
    [
        { char: "E", active: true },
        { char: "S", active: true },
        { char: "M", active: false },
        { char: "I", active: true },
        { char: "S", active: true },
        { char: "T", active: true },
        { char: "E", active: false },
        { char: "F", active: true },
        { char: "Ü", active: true },
        { char: "N", active: true },
        { char: "F", active: true }
    ],
    [
        { char: "Z", active: false },
        { char: "E", active: false },
        { char: "H", active: false },
        { char: "N", active: false },
        { char: "Z", active: false },
        { char: "W", active: false },
        { char: "A", active: false },
        { char: "N", active: false },
        { char: "Z", active: false },
        { char: "I", active: false },
        { char: "G", active: false }
    ],
    [
        { char: "N", active: true },
        { char: "A", active: true },
        { char: "C", active: true },
        { char: "H", active: true },
        { char: "V", active: false },
        { char: "I", active: false },
        { char: "E", active: false },
        { char: "R", active: false },
        { char: "T", active: false },
        { char: "E", active: false },
        { char: "L", active: false }
    ],
    [
        { char: "V", active: false },
        { char: "O", active: false },
        { char: "R", active: false },
        { char: "N", active: false },
        { char: "A", active: false },
        { char: "C", active: false },
        { char: "H", active: false },
        { char: "H", active: false },
        { char: "A", active: false },
        { char: "L", active: false },
        { char: "B", active: false }
    ],
    [
        { char: "E", active: false },
        { char: "I", active: false },
        { char: "N", active: false },
        { char: "S", active: false },
        { char: "I", active: false },
        { char: "N", active: false },
        { char: "K", active: false },
        { char: "Z", active: false },
        { char: "W", active: false },
        { char: "E", active: false },
        { char: "I", active: false }
    ],
    [
        { char: "D", active: false },
        { char: "R", active: false },
        { char: "E", active: false },
        { char: "I", active: false },
        { char: "E", active: false },
        { char: "A", active: false },
        { char: "N", active: false },
        { char: "V", active: false },
        { char: "I", active: false },
        { char: "E", active: false },
        { char: "R", active: false }
    ],
    [
        { char: "F", active: false },
        { char: "Ü", active: false },
        { char: "N", active: false },
        { char: "F", active: false },
        { char: "N", active: false },
        { char: "I", active: false },
        { char: "S", active: false },
        { char: "E", active: false },
        { char: "C", active: false },
        { char: "H", active: false },
        { char: "S", active: false }
    ],
    [
        { char: "S", active: false },
        { char: "I", active: false },
        { char: "E", active: false },
        { char: "B", active: false },
        { char: "E", active: false },
        { char: "N", active: false },
        { char: "I", active: false },
        { char: "A", active: false },
        { char: "C", active: false },
        { char: "H", active: false },
        { char: "T", active: false }
    ],
    [
        { char: "N", active: false },
        { char: "E", active: false },
        { char: "U", active: false },
        { char: "N", active: false },
        { char: "Z", active: false },
        { char: "E", active: false },
        { char: "H", active: false },
        { char: "N", active: false },
        { char: "E", active: false },
        { char: "L", active: false },
        { char: "F", active: false }
    ],
    [
        { char: "Z", active: true },
        { char: "W", active: true },
        { char: "Ö", active: true },
        { char: "L", active: true },
        { char: "F", active: true },
        { char: "K", active: false },
        { char: "A", active: false },
        { char: "B", active: false },
        { char: "U", active: false },
        { char: "H", active: false },
        { char: "R", active: false }
    ]
];

var minAndSec = [
    { char: "M", active: false },
    { char: "1", active: false },
    { char: "0", active: false },
    { char: "0", active: false },
    { char: "S", active: false },
    { char: "1", active: false },
    { char: "1", active: false },
    { char: "1", active: false },
    { char: "1", active: false },
    { char: "1", active: false },
    { char: "0", active: false }
];

React.render(
    <Qlock time={time} minAndSec={minAndSec} />,
    document.getElementById('Qlock')
);
